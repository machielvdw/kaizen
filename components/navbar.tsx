"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Scale } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 items-center px-4">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Kaizen</span>
            <Scale />
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
            <Link href="/">Info</Link>
            <Link href="/checklist">Checklist</Link>
          </nav>
        </div>
        <div className="flex-1" />
        <ModeToggle />
      </div>
    </header>
  );
}
