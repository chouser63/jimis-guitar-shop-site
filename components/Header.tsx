"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/lessons", label: "Lessons" },
  ];

  return (
    <header className="bg-indigo-600 text-white flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold tracking-wide">Jimi’s Guitar Shop</h1>
      <nav className="">
        <div className="flex items-center hidden sm:flex sm:space-x-6">
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
        </div>

        <div className="sm:hidden flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[200px] bg-background border rounded-md shadow-lg">
            <DropdownMenuItem asChild>
              <Link
                href="/"
                className="w-full px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/about"
                className="w-full px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/products"
                className="w-full px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                Products
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="/lessons"
                className="w-full px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                Lessons
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </nav>
    </header>
  );
};

