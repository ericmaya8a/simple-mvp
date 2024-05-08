"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { url: string; text: string }[] = [
  { url: "/", text: "Home" },
  { url: "/tuitions", text: "Last 5 tuitions" },
];

export function NavBar() {
  const path = usePathname();

  return (
    <nav className="bg-blue-400">
      <ul className="flex items-center">
        {links.map(({ url, text }) => {
          const isActive = url === path;
          const className = `p-5 ${
            isActive ? "bg-blue-600 font-bold" : "bg-blue-400"
          } hover:bg-blue-500`;
          return (
            <li
              className="flex justify-center items-center text-white"
              key={url}
            >
              <Link className={className} href={url}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
