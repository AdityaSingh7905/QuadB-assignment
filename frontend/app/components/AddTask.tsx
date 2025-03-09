"use client";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

interface AddTaskProps {
  onAddTask: (task: string, date: string, time: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Ensuring date and time inputs are only set on the client side
  useEffect(() => {
    setDate(new Date().toISOString().split("T")[0]); // Sets today's date
    setTime(new Date().toLocaleTimeString("en-GB").slice(0, 5)); // Sets current time (HH:MM format)
  }, []);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    if (date.trim() === "") return;
    if (time.trim() === "") return;
    onAddTask(task, date, time);
    setTask("");
    setDate(new Date().toISOString().split("T")[0]); // Reset to today's date
    setTime(new Date().toLocaleTimeString("en-GB").slice(0, 5)); // Reset to current time
  };

  return (
    <div className="bg-green-100 dark:bg-[#2D3C2E] p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <p className="text-gray-800 dark:text-white font-semibold">
          Add a Task
        </p>
        <input
          type="text"
          placeholder="Enter task..."
          className="flex-1 border rounded-lg p-2 outline-none text-gray-900 dark:text-white dark:bg-[#2B3B2D] placeholder-gray-600 dark:placeholder-gray-400"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-gray-700 dark:text-gray-300" />
            <input
              type="date"
              className="border rounded-lg p-2 outline-none text-gray-900 dark:text-white dark:bg-[#2B3B2D] dark:[color-scheme:dark]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FaClock className="text-gray-700 dark:text-gray-300" />
            <input
              type="time"
              className="border rounded-lg p-2 outline-none text-gray-900 dark:text-white dark:bg-[#2B3B2D] dark:[color-scheme:dark]"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
