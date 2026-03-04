import { Plus, Puzzle, MoreHorizontal, Filter } from "lucide-react";

const puzzles = [
  { name: "اللغز الأول", status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-400", iconColor: "bg-blue-600" },
  { name: "اللغز الثاني", status: "نشط", statusColor: "bg-emerald-500/20 text-emerald-400", iconColor: "bg-purple-600" },
  { name: "اللغز الثالث", status: "معلق", statusColor: "bg-orange-500/20 text-orange-400", iconColor: "bg-orange-600" },
];

export default function GameManagement() {
  return (
    <div className="bg-[#1e2235] rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 shadow-xl w-full" dir="rtl">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 gap-3 sm:gap-0">
        <div className="text-right">
          <h3 className="text-white text-lg sm:text-xl font-bold">إدارة الألغاز</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage Game Clues and Puzzles</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold flex items-center gap-1 sm:gap-2 transition-all text-xs sm:text-sm">
            <Plus size={16}  />
            <span>إضافة لغز</span>
          </button>
          <button className="p-2 sm:p-2.5 bg-[#2d334d] text-gray-400 rounded-xl hover:bg-gray-700 transition-all">
            <Filter size={18}  />
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {puzzles.map((puzzle, idx) => (
          <div
            key={idx}
            className="bg-[#262b45] rounded-2xl sm:rounded-4xl border border-gray-700/30 p-4 sm:p-5 relative flex flex-col justify-between group transition-transform hover:scale-[1.02]"
          >
            {/* Status Badge - Top Left */}
            <div
              className={`absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[8px] sm:text-[10px] font-bold ${puzzle.statusColor}`}
            >
              {puzzle.status}
            </div>

            {/* Icon + Title Row */}
            <div className="flex items-center gap-2 sm:gap-4 mt-6 sm:mt-8 mb-4 sm:mb-6">
              {/* Puzzle Icon */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 ${puzzle.iconColor} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <Puzzle size={20} className="text-white fill-white/20" />
              </div>

              {/* Puzzle Title & Index */}
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-xs sm:text-sm">{puzzle.name}</h4>
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium">#00{idx + 1}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 w-full">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                تعديل
              </button>
              <button className="p-2 sm:p-2.5 bg-[#2d334d] text-gray-400 rounded-xl hover:bg-gray-700 transition-colors">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
