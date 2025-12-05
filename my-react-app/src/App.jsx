import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LiveMarket from "./components/Livemarket";
import Transactions from "./components/Transaction";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-4 flex items-center justify-center h-64 hover:scale-[1.02] transition-transform duration-300">
            <LiveMarket />
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-4 flex items-center justify-center h-64 hover:scale-[1.02] transition-transform duration-300">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}
