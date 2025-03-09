import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaSun,
  FaStar,
  FaCalendarAlt,
  FaTasks,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import TaskChart from "./TaskChart";
import WeatherWidget from "./WeatherWidget";
import DarkModeToggle from "./DarkMode";

const categories = [
  { name: "All Tasks", icon: <FaTasks /> },
  { name: "Today", icon: <FaSun /> },
  { name: "Important", icon: <FaStar /> },
  { name: "Planned", icon: <FaCalendarAlt /> },
  { name: "Completed", icon: <MdCheckBox /> },
];

interface Task {
  _id: string;
  userId: string;
  text: string;
  date: string;
  time: string;
  isCompleted: boolean;
  isImportant: boolean;
}

interface SidebarProps {
  setActiveCategory: (category: string) => void;
  tasks: Task[];
}

export default function Sidebar({ setActiveCategory, tasks }: SidebarProps) {
  const [selected, setSelected] = useState("Today");
  const router = useRouter();

  useEffect(() => {
    setActiveCategory(selected);
  }, [selected]);

  const handleCategoryClick = (category: string) => {
    setSelected(category);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    router.push("/auth/login"); // Redirect to login
  };

  return (
    <div className="w-64 bg-green-100 dark:bg-[#1D291E] text-gray-900 dark:text-white h-auto p-4 flex flex-col border-r border-gray-300">
      <div className="flex flex-row mb-3 justify-center">
        <h1 className="text-xl font-bold text-green-700 dark:text-white text-center pr-4">
          ToDo Organizer
        </h1>
        <DarkModeToggle />
      </div>

      <div className="flex flex-col space-y-1 flex-grow">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`flex items-center space-x-2 p-2 cursor-pointer rounded-lg w-full text-base transition font-medium ${
              selected === cat.name
                ? "bg-green-700 text-white shadow-md"
                : "hover:bg-green-300 dark:hover:bg-green-500 text-gray-800 dark:text-white"
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <span className="text-lg">{cat.icon}</span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <WeatherWidget />
      </div>

      <div className="flex justify-center mt-2">
        <TaskChart tasks={tasks} />
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center space-x-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition w-full shadow-md font-medium mt-2"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
}
