"use client";
import { LucideShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  const links = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "bag", path: "/bag" },
    { id: 3, name: "sneakers", path: "/sneakers" },
    { id: 4, name: "belt", path: "/belt" },
    { id: 5, name: "contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-white relative">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <strong>E-COMM</strong>
      </div>

      <nav className="hidden w-6/12 md:flex justify-between items-center">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={`${
              path === link.path ? "text-blue-500" : "text-black"
            } hover:text-blue-500 transition`}
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </nav>

      <div className="md:hidden relative">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        <label
          htmlFor="menu-toggle"
          className="flex flex-col fixed right-5 top-3 w-7 h-7 justify-between cursor-pointer z-50"
        >
          <Menu />
        </label>

        <div className="peer-checked:flex hidden flex-col gap-2 p-4 bg-white rounded shadow absolute right-0 top-10 w-48 z-40 transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={`${
                path === link.path
                  ? "bg-blue-500 text-white"
                  : "text-black hover:bg-gray-100"
              } rounded-sm p-2 text-center transition`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex fixed right-15 md:static gap-2 items-center">
        <LucideShoppingCart />
        <p>
          Items <span className="text-gray-500">$0.00</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
