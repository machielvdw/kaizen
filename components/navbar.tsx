"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Scale } from "lucide-react";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="flex w-full h-14 items-center px-4">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <motion.div
            className="fixed top-0 left-0 right-0 h-2 bg-primary"
            style={{ scaleX }}
          />
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
