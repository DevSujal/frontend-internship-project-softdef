import Image from "next/image";
import Link from "next/link";
import React from "react";

const Badge = ({ className }) => {
  return (
    <div
      className={`w-full h-[350px] relative  rounded-sm ${className}`}
    >
      <div className="w-full flex justify-between items-center h-10/12 absolute bottom-0">
        <div className="text-white ml-10">
          <h2 className="text-2xl mb-3">Adidas Men Running</h2>
          <div className="mb-6">
            <h2 className="text-2xl mb-0">Sneakers</h2>
            <p className="text-gray-300 text-sm mt-0">
              {" "}
              Performance and design. Taken right to the edge.
            </p>
          </div>
          <Link
            className="text-white underline cursor-pointer hover:text-blue-800"
            href="/"
          >
            shop now
          </Link>
        </div>
        <Image
          width={300}
          height={300}
          className={` transform -scale-x-100`}
          src="/shoe.png"
          alt="shoe image"
        />
      </div>
    </div>
  );
};

export default Badge;
