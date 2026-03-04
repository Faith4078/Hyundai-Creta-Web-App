import Image from "next/image";

const users = [
  { name: "أحمد محمد", email: "ahmed.m@email.com", progress: 75, status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-500", time: "منذ ساعتين", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "سارة خالد", email: "sara.k@email.com", progress: 45, status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-500", time: "ساعات", avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "فهد العتيبي", email: "fahad.a@email.com", progress: 90, status: "قيد التقدم", statusColor: "bg-orange-500/20 text-orange-500", time: "ساعات", avatar: "https://i.pravatar.cc/150?u=3" },
  { name: "نورة السيد", email: "noura.s@email.com", progress: 100, status: "مكتمل", statusColor: "bg-purple-500/20 text-purple-500", time: "ساعات", avatar: "https://i.pravatar.cc/150?u=4" },
  { name: "أحمد محمد", email: "ahmed.m@email.com", progress: 75, status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-500", time: "منذ ساعتين", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "سارة خالد", email: "sara.k@email.com", progress: 45, status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-500", time: "ساعات", avatar: "https://i.pravatar.cc/150?u=2" }
];

export default function RecentUsers() {
  return (
    <div className="bg-[#1e2235] rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 shadow-xl w-full" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8">
        <div className="text-right">
          <h3 className="text-white text-lg sm:text-xl font-bold">المستخدمون الأخيرون</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Recent User Registrations</p>
        </div>
        <button className="mt-2 sm:mt-0 bg-blue-600/20 text-blue-400 px-4 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-bold hover:bg-blue-600/30">
          عرض الكل
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[600px] sm:min-w-0">
          <thead>
            <tr className="text-gray-400 text-[10px] sm:text-[11px] uppercase border-b border-gray-700/50">
              <th className="pb-3 sm:pb-4 font-medium">المستخدم</th>
              <th className="pb-3 sm:pb-4 font-medium">البريد الإلكتروني</th>
              <th className="pb-3 sm:pb-4 font-medium">الحالة</th>
              <th className="pb-3 sm:pb-4 font-medium">التقدم</th>
              <th className="pb-3 sm:pb-4 font-medium">التاريخ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/30">
            {users.map((user, idx) => (
              <tr key={idx} className="group hover:bg-white/2 transition-colors">
                <td className="py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={user.avatar} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-700" alt={user.name} />
                    <span className="text-white font-bold text-xs sm:text-sm">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 text-gray-400 text-[9px] sm:text-sm">{user.email}</td>
                <td className="py-3 sm:py-4">
                  <span className={`px-3 sm:px-4 py-1 rounded-lg text-[8px] sm:text-[10px] font-bold ${user.statusColor}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-1 bg-gray-700 h-1.5 rounded-full max-w-[80px] sm:max-w-[100px]">
                      <div 
                        className={`h-full rounded-full ${user.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'}`} 
                        style={{ width: `${user.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-[8px] sm:text-[10px] text-gray-400">{user.progress}%</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 text-gray-500 text-[9px] sm:text-xs">{user.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
