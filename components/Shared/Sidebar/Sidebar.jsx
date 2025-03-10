"use client";

import { sidebarNavLinks } from "../../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineWorkspaces } from "react-icons/md";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="w-full flex h-[60px] items-center px-4">
        <MdOutlineWorkspaces className="text-xl mr-2" />
        <h2 className="text-xl font-semibold">WA</h2>
      </div>

      <div className="p-3">
        {sidebarNavLinks.map((navItem, i) => (
          <Link
            href={navItem.path}
            key={i}
            className={`link ${
              pathname === navItem.path || pathname.includes(navItem.path)
                ? "bg-accent dark:bg-slate-900 text-[#3c51d7]"
                : "text-muted-foreground"
            } w-full flex items-center gap-2 px-3.5 py-3 rounded-md text-sm mb-2.5`}
          >
            <span>{navItem.icon}</span>
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
