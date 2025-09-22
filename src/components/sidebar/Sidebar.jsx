"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./sidebar.css";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { setColor } from "@/store/features/searchSlice";

const Sidebar = ({ className }) => {
  const dispatch = useDispatch();
  const deals = [
    { id: 1, name: "Nike", value: 2 },
    { id: 2, name: "Airmax", value: 48 },
    { id: 3, name: "Nike", value: 14 },
    { id: 4, name: "Adidas", value: 15 },
    { id: 5, name: "Vans", value: 23 },
    { id: 6, name: "All Stars", value: 1 },
    { id: 7, name: "Adidas", value: 95 },
  ];

  const colors = [
    { id: 1, name: "red", color: "bg-red-500" },
    { id: 2, name: "orange", color: "bg-orange-500" },
    { id: 3, name: "black", color: "bg-black" },
    { id: 4, name: "yellow", color: "bg-yellow-500" },
    { id: 5, name: "pink", color: "bg-pink-500" },
    { id: 6, name: "gray", color: "bg-gray-500" },
  ];

  const [currColor, setCurrColor] = useState(1);

  const [minRange, setMinRange] = useState(14);
  const [maxRange, setMaxRange] = useState(30);

  const min = 0;
  const max = 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxRange - 1);
    setMinRange(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minRange + 1);
    setMaxRange(value);
  };

  const renderDeals = () => (
    <div className="flex flex-col gap-8">
      {deals.map((deal) => (
        <div key={deal.id} className="flex justify-between">
          <span className="text-gray-800">{deal.name}</span>
          <span className="text-gray-500">{deal.value}</span>
        </div>
      ))}
    </div>
  );

  const renderPrices = () => {
    const minPercent = ((minRange - min) / (max - min)) * 100;
    const maxPercent = ((maxRange - min) / (max - min)) * 100;

    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-gray-800">Range:</span>
          <span className="font-semibold text-gray-800">
            ${minRange} - ${maxRange}
          </span>
        </div>

        <div className="relative w-full h-8">
          {/* Track */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full"></div>

          {/* Active Range */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          ></div>

          {/* Min Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            value={minRange}
            onChange={handleMinChange}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb min-slider"
            style={{ zIndex: 3 }}
          />

          {/* Max Range Input */}
          <input
            type="range"
            min={min}
            max={max}
            value={maxRange}
            onChange={handleMaxChange}
            className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb max-slider"
            style={{ zIndex: 2 }}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>${min}</span>
          <span>${max}</span>
        </div>
      </div>
    );
  };

  const handleColorClick = (e) => {
    console.log("Hi");
    if (e.target.tagName === "SPAN") {
      setCurrColor(Number(e.target.id));
      console.log(e.target.id);
      console.log(
        colors.filter((color) => color.id === Number(e.target.id))[0]
      );
      dispatch(
        setColor({
          color: colors.filter((color) => color.id === Number(e.target.id))[0]
            .name,
        })
      );
    }
  };

  const renderColors = () => {
    return (
      <div
        className="flex justify-around items-center"
        onClick={handleColorClick}
      >
        {colors.map((color) => {
          return (
            <span
              key={color.id}
              className={`m-2 w-8 h-8 flex items-center justify-center rounded-full ${
                currColor === color.id && "border-2 border-gray-400"
              } cursor-pointer`}
            >
              <span
                id={color.id}
                className={`block w-6 h-6 rounded-full ${color.color}`}
              ></span>
            </span>
          );
        })}
      </div>
    );
  };

  const [isActive, setIsActive] = useState();

  return (
    <>
      {isActive ? (
        <X
          className="md:hidden cursor-pointer fixed top-[64px] left-[350px] z-200"
          onClick={() => setIsActive(false)}
        />
      ) : (
        <Menu
          className="md:hidden cursor-pointer fixed left-2 top-[64px] z-200"
          onClick={() => setIsActive(true)}
        />
      )}
      <div
        className={`flex fixed left-2 top-[64px] z-200 ${
          !isActive && "hidden"
        } md:static md:flex flex-col gap-4 ${className}`}
      >
        <Card title="Hot Deals" className="" render={renderDeals} />
        <Card title="Prices" render={renderPrices} />
        <Card title="Colors" render={renderColors} />
        <div className="bg-[#F6F7F8] cursor-pointer p-5 w-full flex flex-col gap-6 rounded-sm text-center">
          More
        </div>
      </div>
    </>
  );
};

export default Sidebar;
