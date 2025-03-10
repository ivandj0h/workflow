"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = ({ placeholder }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log("Result Search : ", value);
  };

  return (
    <div className="bg-background dark:bg-slate-900 flex items-center gap-2.5 px-3 py-[7px] border rounded-md">
      <Search size={16} className="text-muted-foreground" />
      <Input
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        className="p-0 dark:bg-slate-900 border-none h-auto text-sm font-normal placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
      />
    </div>
  );
};

export default SearchInput;
