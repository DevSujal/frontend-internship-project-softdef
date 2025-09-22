"use client";
import Badge from "@/components/Badge";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Grid, Menu } from "lucide-react";
import { items } from "../data/mockData";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header className="fixed w-full top-0 z-300" />
      <div className="flex gap-2 mt-16">
        <Sidebar className="flex-2" />
        <div className="flex-8 flex flex-col gap-3">
          <Badge className={`bg-[#40BFFF]`} />
          <div className="bg-[#F6F7F8] flex p-3 w-full rounded-sm">
            <div className="flex justify-between flex-5">
              <p>{13} Items</p>
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
                  <option value="name">name</option>
                </select>
              </label>
              <label htmlFor="show">
                Show {"   "}
                <select
                  name="show"
                  id="show"
                  className="w-36 shadow-sm rounded-sm p-1"
                >
                  <option value="6">8</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                </select>
              </label>
            </div>
            <div className="flex justify-end gap-2 flex-5">
              <Grid className="cursor-pointer" />
              <Menu className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2
          
          
          ">
            {items.map((item) => {
              return <Card key={item.id} product={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
