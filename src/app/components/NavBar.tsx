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
    <nav className="bg-slate-400">
      <ul className="flex items-center">
        {links.map(({ url, text }) => {
          const isActive = url === path;
          const className = `p-5 ${
            isActive ? "bg-slate-600" : "bg-slate-400"
          } hover:bg-slate-500`;
          return (
            <li className="flex justify-center items-center" key={url}>
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
