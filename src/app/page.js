"use client";
import { useState } from "react";
import Badge from "@/components/Badge";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Grid, Menu } from "lucide-react";
import { items } from "../data/mockData";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleShowChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div>
      <Header className="fixed w-full top-0 z-300" />
      <div className="flex gap-2 mt-16">
        <Sidebar className="flex-2" />
        <div className="flex-8 flex flex-col gap-3">
          <Badge className={`bg-[#40BFFF]`} />

          {/* Controls */}
          <div className="bg-[#F6F7F8] flex p-3 w-full rounded-sm">
            <div className="flex justify-between flex-5">
              <p>{items.length} Items</p>

              <label htmlFor="sortby">
                SortBy {"   "}
                <select
                  name="sortby"
                  id="sortby"
                  className="w-36 shadow-sm rounded-sm p-1"
                >
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                  <option value="rating">Rating</option>
                </select>
              </label>

              <label htmlFor="show">
                Show {"   "}
                <select
                  name="show"
                  id="show"
                  className="w-36 shadow-sm rounded-sm p-1"
                  value={itemsPerPage}
                  onChange={handleShowChange}
                >
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                </select>
              </label>
            </div>

            <div className="flex justify-end gap-2 flex-5">
              <Grid className="cursor-pointer" />
              <Menu className="cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {currentItems.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>

          <div className="bg-[#F6F7F8] flex h-16 justify-center gap-2 mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 w-[80px] py-1 cursor-pointer ${
                  currentPage === index + 1 ? "bg-blue-400 text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
