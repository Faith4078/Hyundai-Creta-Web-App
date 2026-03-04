import { Plus, Download, FileText, UserPlus, Settings, Info } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { label: "إضافة لغز جديد", Icon: Plus, primary: true },
    { label: "تصدير البيانات", Icon: Download, primary: false },
    { label: "تقرير شامل", Icon: FileText, primary: false },
    { label: "إضافة مشرف", Icon: UserPlus, primary: false },
    { label: "إعدادات اللعبة", Icon: Settings, primary: false },
  ];

  return (
    <div className="space-y-4 sm:space-y-6" dir="rtl">
      {/* Actions Card */}
      <div className="bg-[#1e2235] rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 shadow-xl">
        <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-right">
          إجراءات سريعة
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {actions.map((action) => (
            <button
              key={action.label}
              className={`flex items-center justify-between w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all ${
                action.primary
                  ? "bg-[#2563eb] text-white hover:bg-blue-700"
                  : "bg-[#2d334d] text-gray-300 hover:bg-[#373e5a]"
              }`}
            >
              <span className="font-medium text-xs sm:text-sm">{action.label}</span>
              <action.Icon size={16}  />
            </button>
          ))}
        </div>
      </div>

      {/* Update Card */}
      <div className="bg-[#1e2235] rounded-2xl sm:rounded-[2.5rem] p-1 shadow-xl border border-blue-500/20">
        <div className="bg-linear-to-br from-blue-900/40 to-blue-800/20 rounded-2xl sm:rounded-[2.3rem] p-4 sm:p-6">
          <div className="flex items-center gap-2 text-blue-400 mb-2 sm:mb-3">
            <Info size={16}/>
            <span className="font-bold text-xs sm:text-sm">تحديث النظام</span>
          </div>
          <p className="text-gray-400 text-[10px] sm:text-[11px] mb-3 sm:mb-4 leading-relaxed">
            إصدار جديد متاح للتحديث مع تحسينات في الأداء العام للنظام
          </p>
          <button className="w-full py-2 sm:py-3 bg-[#2563eb] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-blue-600 transition-colors">
            تحديث الآن
          </button>
        </div>
      </div>
    </div>
  );
}
