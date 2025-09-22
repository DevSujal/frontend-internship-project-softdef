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
      <div className="flex flex-col gap-2 justify-center bg-white items-center">
        <p>{product.name}</p>
        {[...new Array(product.ratingValue)].map((value) => {
          return <StarIcon key={value} className="bg-yellow-400" />;
        })}
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
