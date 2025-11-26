import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex overflow-x-clip min-h-screen w-full max-w-3xl flex-col">
      {/* Hero section */}
      <div className="h-screen bg-[url(/assets/mountains.jpg)]"></div>
    </main>
  );
}
