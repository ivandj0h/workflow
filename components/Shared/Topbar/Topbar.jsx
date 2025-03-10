"use client";

import React from "react";
import { pathInfo } from "../../../constants";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { ModeToggle } from "../../ThemeSwitcher";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../../components/ui/button";

const Topbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full h-[60px] bg-background border-b flex items-center justify-between p-4">
      <div>
        {pathname.includes("automation") ? (
          <div>
            <h3 className="text-lg font-semibold">
              {pathname.includes("automation/")
                ? "Workflow Builder"
                : "Automation"}
            </h3>
            <p className="text-sm text-muted-foreground">
              Automated Flow for Effective Actions
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold">
              {pathInfo[pathname.replace("/", "")].path}
            </h3>
            <p className="text-sm text-muted-foreground">
              {pathInfo[pathname.replace("/", "")].subtitle}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <ModeToggle />

        {/* Notification */}
        <Popover>
          <PopoverTrigger>
            <span className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 right-0 z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              </span>
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            Place content for the Notification
          </PopoverContent>
        </Popover>

        {/* Account */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage
                alt="profile-img"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div>
                <h3 className="text-base font-medium">ivandjoh</h3>
                <p className="text-sm font-normal text-muted-foreground">
                  ivandjoh@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Subscriptions</DropdownMenuItem>
            <DropdownMenuSeparator />

            <div className="px-2 py-1.5">
              <Button variant="destructive" className="w-full">
                Sign out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topbar;
