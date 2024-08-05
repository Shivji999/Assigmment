import React from "react";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import './dashboard.css';

import {
  FaBullseye,
  FaHamburger,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";
import { BsBasket2Fill } from "react-icons/bs";
import { FiBox, FiDollarSign, FiTruck } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Dashboard = () => {
  const profitPercentage = 70;

  const data = [
    { name: "5", value: 4000 },
    { name: "9", value: 3000 },
    { name: "11", value: 2000 },
    { name: "13", value: 2780 },
    { name: "15", value: 1890 },
    { name: "17", value: 2390 },
    { name: "19", value: 3490 },
    { name: "21", value: 2000 },
    { name: "23", value: 2780 },
    { name: "25", value: 1890 },
    { name: "27", value: 3490 },
  ];

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{ backgroundColor: "#032B43" }}
    >
      <Navigation />
      <div
        className="flex-1 min-h-screen bg-gray-900 text-white"
        style={{ backgroundColor: "#3F88C5" }}
      >
        <Header />
        <div className="p-4" style={{ backgroundColor: "#0B3142" }}>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-4 lg:grid-cols-5 gap-3 mt-4">
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <BsBasket2Fill className="text-blue-500 text-4xl mr-4" />
                  <h2 className="text-md">Total Orders</h2>
                  <p className="text-2xl">75</p>
                  <span className="text-green-500">▲3%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <FiTruck className="text-green-500 text-4xl mr-4" />
                  <h2 className="text-md">Total Delivered</h2>
                  <p className="text-2xl">70</p>
                  <span className="text-red-500">▼3%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <FiBox className="text-red-500 text-4xl mr-4" />
                  <h2 className="text-md">Total Cancelled</h2>
                  <p className="text-2xl">5</p>
                  <span className="text-green-500">▲3%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <div>
                  <FiDollarSign className="text-pink-500 text-4xl mr-4" />
                  <h2 className="text-md">Total Revenue</h2>
                  <p className="text-2xl">$12k</p>
                  <span className="text-red-500">▼3%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
              <div>
                <h2 className="text-md">Net Profit</h2>
                <p className="text-2xl">$6759.25</p>
                <div className="text-sm text-gray-400 mt-2">
                  *The values here have been rounded off.
                </div>
                <span className="text-red-500">▼3%</span>
              </div>
              <div className="w-32 h-32">
                <CircularProgressbar
                  value={profitPercentage}
                  text={`${profitPercentage}%`}
                  styles={{
                    path: { stroke: "#00bfff" },
                    text: { fill: "#fff", fontSize: "24px" },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mt-4   ">
            <div className="md:col-span-2">
              <div className="bg-gray-800 p-4 rounded">
                <h2 className="text-xl font-bold">Activity</h2>
                <div className="  rounded mt-1">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={data}
                      margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
                      barSize={30}
                    >
                      <CartesianGrid stroke="none" fill="none" />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#9CA3AF" }}
                        axisLine={{ stroke: "#4B5563" }}
                        tickLine={{ stroke: "#4B5563" }}
                      />
                      <YAxis
                        tick={{ fill: "#9CA3AF" }}
                        axisLine={{ stroke: "#4B5563" }}
                        tickLine={{ stroke: "#4B5563" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1F2937",
                          border: "none",
                        }}
                        // itemStyle={{ color: "#F3F4F6" }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#38BDF8"
                        radius={[10, 10, 10, 10]}
                        barSize={30}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="h-auto bg-gray-800 p-4 rounded space-y-4">
              <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
                <div className="flex items-center">
                  <FaBullseye className="text-orange-500 text-2xl mr-4" />
                  <h2 className="text-xl">Goals</h2>
                </div>
                <FaArrowRight className="text-gray-400" />
              </div>
              <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
                <div className="flex items-center">
                  <FaHamburger className="text-blue-500 text-2xl mr-4" />
                  <h2 className="text-xl">Popular Dishes</h2>
                </div>
                <FaArrowRight className="text-gray-400" />
              </div>
              <div className="bg-gray-800 p-4 rounded flex items-center justify-between">
                <div className="flex items-center">
                  <FaUtensils className="text-teal-500 text-2xl mr-4" />
                  <h2 className="text-xl">Menus</h2>
                </div>
                <FaArrowRight className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-800 p-4 rounded">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="Wade Warren"
                    />
                    <span>Wade Warren</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Order No. 15478256</p>
                    <p className="text-sm">$124.00</p>
                    <p className="text-green-500">Delivered</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="Jane Cooper"
                    />
                    <span>Jane Cooper</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Order No. 48965786</p>
                    <p className="text-sm">$305.02</p>
                    <p className="text-green-500">Delivered</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt="Guy Hawkins"
                    />
                    <span>Guy Hawkins</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Order No. 78989215</p>
                    <p className="text-sm">$45.88</p>
                    <p className="text-red-500">Cancelled</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="Kristin Watson"
                    />
                    <span>Kristin Watson</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Order No. 20965732</p>
                    <p className="text-sm">$65.00</p>
                    <p className="text-yellow-500">Pending</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Cameron Williamson"
                    />
                    <span>Cameron Williamson</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Order No. 50912786</p>
                    <p className="text-sm">$149.99</p>
                    <p className="text-green-500">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-gray-800 p-4 rounded  overflow-y-auto custom-scrollbar"
              style={{ height: 470 }}
            >
              <h2 className="text-xl font-bold">Customer's Feedback</h2>
              <div className="space-y-2 mt-4">
                <div className="bg-gray-700 p-4 rounded">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/women/3.jpg"
                      alt="Jenny Wilson"
                    />
                    <div>
                      <h3>Jenny Wilson</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    The food was excellent and so was the service. I had the
                    mushroom risotto with scallops which was awesome. I had a
                    burger over greens (gluten-free) which was also very good.
                    They were very conscientious about gluten allergies.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/women/4.jpg"
                      alt="Dianne Russell"
                    />
                    <div>
                      <h3>Dianne Russell</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    We enjoyed the Eggs Benedict served on homemade focaccia
                    bread and hot coffee. Perfect service.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/men/4.jpg"
                      alt="Devon Lane"
                    />
                    <div>
                      <h3>Devon Lane</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    Normally wings are wings, but theirs are lean meaty and
                    tender, and perfectly cooked!
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                      alt="Ralph Edwards"
                    />
                    <div>
                      <h3>Ralph Edwards</h3>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                        <span className="text-gray-500">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    Great experience, but the wait time was a bit longer than
                    expected.
                  </p>
                </div>
                <div className="bg-gray-700 p-4 rounded">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://randomuser.me/api/portraits/women/5.jpg"
                      alt="Annette Black"
                    />
                    <div>
                      <h3>Annette Black</h3>
                      <div className="flex">
                        {[...Array(3)].map((_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <span key={i} className="text-gray-500">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    The atmosphere was nice, but the food could have been
                    better.
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
