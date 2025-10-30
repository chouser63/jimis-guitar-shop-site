"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-indigo-600 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold tracking-wide">Jimi’s Guitar Shop</h1>
      <nav className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${
              pathname === item.href ? "underline font-semibold" : ""
            } hover:text-gray-200 transition`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

