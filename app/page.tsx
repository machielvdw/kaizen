"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import { categories as categoriesData } from "@/data/categories";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Kaizen
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          (Japanese: 改善, &quot;improvement&quot;) is a concept referring to
          business activities that continuously improve all functions and
          involve all employees from the CEO to the assembly line workers.
        </blockquote>
        <h2 className="mt-6 border-b pb-2 text-3xl font-semibold tracking-tight">
          Background: Understanding the Key Areas of Effective Engineering
        </h2>
        <p className="leading-7 mt-2">
          The best engineers consistently excel in four areas:{" "}
          <i>
            technical development practices, organizational awareness, strategic
            collaboration, and leadership and accountability
          </i>
          . These categories encompass both technical habits and interpersonal
          skills that amplify impact in any organization. Below is an overview
          of each area and its key components.
        </p>

        {categoriesData.map((category) => (
          <div key={category.id}>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="leading-7 mt-2">{category.description}</p>
            <ul className="my-6 ml-6 list-disc mt-2">
              {category.questions.map((question) => {
                const [title, ...descriptionParts] =
                  question.description.split(": ");
                const description = descriptionParts.join(": ");
                return (
                  <li key={question.id}>
                    <strong>{title}</strong>: {description}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight mt-8">
          Next Steps
        </h2>
        <p className="leading-7 mt-2">
          The following checklist can help assess your engineer&apos;s current
          habits and identify areas for improvement. The results are a
          reflection of the individual, the environment, and the company as a
          whole.
        </p>
        <motion.div
          className="w-full mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button asChild className="w-full mt-6">
            <Link href="/checklist">Get Started with the Checklist</Link>
          </Button>
        </motion.div>
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight mt-12">
          Sources
        </h2>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>
            <a
              href="https://newsletter.pragmaticengineer.com/p/how-to-become-a-more-effective-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How to Become a More Effective Engineer - The Pragmatic Engineer
            </a>
          </li>
          <li>
            <a
              href="https://read.engineerscodex.com/p/7-simple-habits-of-the-top-1-of-engineers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              7 Simple Habits of the Top 1% of Engineers - Engineer&apos;s Codex
            </a>
          </li>
          <li>
            <a
              href="https://www.mobilelive.ca/blog/7-essential-qualities-a-developer-must-have"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              7 Essential Qualities a Developer Must Have - MobileLIVE
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/ExperiencedDevs/comments/1ddfb38/how_exactly_do_you_define_a_good_developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How exactly do you define a good developer? - r/ExperiencedDevs
            </a>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
