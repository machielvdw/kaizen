"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { categories as categoriesData } from "@/data/categories";

import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Checklist from "@/components/checklist";

import { Category } from "@/lib/types";

export default function CheckListPage() {
  const router = useRouter();
  const [reviewerName, setReviewerName] = useState("");
  const [engineerName, setEngineerName] = useState("Machiel");
  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState<Category[]>(categoriesData);

  const handleSubmit = async () => {
    setIsLoading(true);
    const feedback = {
      reviewerName,
      engineerName,
      categories,
    };

    try {
      const response = await fetch("/api/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedback),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log("Data saved successfully:", result.insertedId);
        router.push(`/results?id=${result.insertedId}`);
      } else {
        console.error("Error saving data:", result.error);
        alert("There was an error submitting your feedback. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Checklist
        </h1>
        <div className="w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reviewer">You</Label>
              <Input
                type="text"
                id="reviewer"
                placeholder="Your Name"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="engineer">Engineer</Label>
              <Input
                type="text"
                id="engineer"
                placeholder="Engineer's Name"
                value={engineerName}
                onChange={(e) => setEngineerName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Checklist categories={categories} setCategories={setCategories} />
        <motion.div
          className="w-full mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Button
            onClick={handleSubmit}
            className="w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
