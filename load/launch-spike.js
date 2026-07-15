// k6 launch-spike profile for the Creta campaign.
//
// Models the go-live traffic shape: a wall of arrivals in the first minute,
// sustained pressure, then decay. Each virtual user behaves like a
// participant — lands on the campaign page, then polls the leaderboard
// with think-time between requests.
//
// Run (small local smoke):
//   k6 run -e BASE_URL=http://localhost:3000 --vus 50 --duration 1m load/launch-spike.js
//
// Run (full 50k profile — requires k6 Cloud or distributed runners; a
// single machine cannot generate this load):
//   k6 cloud -e BASE_URL=https://<deployed-url> load/launch-spike.js
//
// Never point this at infrastructure you don't own.

import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  scenarios: {
    launch_spike: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 5000 },   // early arrivals
        { duration: '1m', target: 50000 },  // go-live wall
        { duration: '10m', target: 50000 }, // sustained spike
        { duration: '5m', target: 0 },      // decay
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const landing = http.get(`${BASE_URL}/`);
  check(landing, { 'landing page 200': (r) => r.status === 200 });
  sleep(2 + Math.random() * 3);

  // Unauthenticated VUs get a 401 here — that still exercises the route,
  // session lookup, and function scaling under load.
  const leaderboard = http.get(`${BASE_URL}/api/leaderboard`);
  check(leaderboard, {
    'leaderboard responds': (r) => r.status === 200 || r.status === 401,
  });
  sleep(5 + Math.random() * 10);
}
