import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({ classname, product, isGrid }) => {
  return (
    <div className="bg-[#F6F7F8] p-2">
      <div
        className={`bg-[#F6F7F8] flex  ${
          !isGrid && "flex-col"
        } p-3 w-full justify-center h-[250px] items-center rounded-sm relative`}
      >
        {product.isHot && (
          <span className="bg-orange-700 text-white px-2 rounded-sm absolute left-0 top-0">
            HOT
          </span>
        )}
        <Image
          src={product.imageUrl}
          width={200}
          height={200}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center py-5 bg-white items-center">
        <p>{product.name}</p>
        <div className="flex gap-2">
          {[...new Array(5)].map((value, idx) => {
            if (idx < product.ratingValue) {
              return (
                <Image
                  key={idx}
                  src="/yellow-star.png"
                  width={20}
                  height={20}
                  alt="star"
                />
              );
            } else
              return (
                <Image
                  key={idx}
                  src="/star.png"
                  width={20}
                  height={20}
                  alt="star"
                />
              );
          })}
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="font-bold text-blue-400">${product.discountPrice}</p>
          <p className="text-gray-400 line-through">${product.price}</p>
          <p className="font-bold text-orange-600">
            {product.discountPercent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
