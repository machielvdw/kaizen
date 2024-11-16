"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Checklist from "@/components/checklist";

type Question = {
  id: string;
  text: string;
  value: number;
};

type Category = {
  id: string;
  title: string;
  questions: Question[];
  comment?: string;
};

export default function CheckListPage() {
  const [reviewerName, setReviewerName] = useState("");
  const [developerName, setDeveloperName] = useState("");

  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      title: "1. Code Quality and Development Practices",
      questions: [
        {
          id: "1.1",
          text: "To what extent does the engineer prioritize writing code that is readable and clear to other developers?",
          value: 3,
        },
        {
          id: "1.2",
          text: "How open is the engineer to receiving feedback and revising or discarding their code for the benefit of the project's overall outcome?",
          value: 3,
        },
        {
          id: "1.3",
          text: "How consistently does the engineer adhere to team coding standards and styles to promote a shared understanding within the team?",
          value: 3,
        },
        {
          id: "1.4",
          text: "To what degree does the engineer write code that is simple, logical, and easy to understand, even if it was complex to create?",
          value: 3,
        },
        {
          id: "1.5",
          text: "How effectively does the engineer prioritize adequate testing to ensure code reliability without over-testing?",
          value: 3,
        },
      ],
    },
    {
      id: "2",
      title: "2. Organizational Awareness and Navigation",
      questions: [
        {
          id: "2.1",
          text: "How well does the engineer understand the organization's structure and dynamics, aligning their work with organizational goals?",
          value: 3,
        },
        {
          id: "2.2",
          text: "How effectively does the engineer apply soft skills like clear communication, conflict resolution, and work prioritization to navigate workplace challenges?",
          value: 3,
        },
        {
          id: "2.3",
          text: "To what extent is the engineer aware of the informal hierarchies within the organization and works effectively within them?",
          value: 3,
        },
        {
          id: "2.4",
          text: "How well does the engineer recognize the organization's decision-making culture and adjust their approach accordingly?",
          value: 3,
        },
        {
          id: "2.5",
          text: "How effectively does the engineer adapt to existing organizational or codebase complexities, working efficiently within constraints?",
          value: 3,
        },
      ],
    },
    {
      id: "3",
      title: "3. Strategic and Collaborative Skills",
      questions: [
        {
          id: "3.1",
          text: "How actively does the engineer pursue small, impactful wins to build credibility and establish reliability?",
          value: 3,
        },
        {
          id: "3.2",
          text: "How open is the engineer to seeking and incorporating feedback from others to improve their designs and code?",
          value: 3,
        },
        {
          id: "3.3",
          text: "How well does the engineer balance the need for quick delivery with careful adherence to coding standards, testing, and communication?",
          value: 3,
        },
        {
          id: "3.4",
          text: "To what extent is the engineer adaptable in their approach, knowing when to adjust or deviate from guidelines when necessary?",
          value: 3,
        },
        {
          id: "3.5",
          text: "How effectively does the engineer make their work and achievements visible to colleagues and stakeholders to gain support for future projects?",
          value: 3,
        },
      ],
    },
    {
      id: "4",
      title: "4. Leadership and Accountability",
      questions: [
        {
          id: "4.1",
          text: "To what extent does the engineer take full responsibility for their tasks and their outcomes, acknowledging both successes and failures?",
          value: 3,
        },
        {
          id: "4.2",
          text: "How actively does the engineer invest in the growth of their teammates by sharing knowledge and providing guidance?",
          value: 3,
        },
        {
          id: "4.3",
          text: "How proactive is the engineer in anticipating challenges and making informed decisions to address them before they escalate?",
          value: 3,
        },
        {
          id: "4.4",
          text: "How openly does the engineer communicate progress, setbacks, and changes to build trust within the team and with stakeholders?",
          value: 3,
        },
        {
          id: "4.5",
          text: "How committed is the engineer to personal and team growth by seeking feedback, reflecting on experiences, and implementing improvements?",
          value: 3,
        },
      ],
    },
  ]);

  const handleSubmit = async () => {
    const feedback = {
      reviewerName,
      developerName,
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

      if (result.success) {
        console.log("Data saved successfully:", result.insertedId);
        // Optionally, reset the form or navigate to a success page
      } else {
        console.error("Error saving data:", result.error);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Checklist
        </h1>
        <div className="w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="reviewer">Your Name</Label>
              <Input
                type="text"
                id="reviewer"
                placeholder="Your Name"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="developer">Developer's Name</Label>
              <Input
                type="text"
                id="developer"
                placeholder="Developer's Name"
                value={developerName}
                onChange={(e) => setDeveloperName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Checklist categories={categories} setCategories={setCategories} />
        <Button onClick={handleSubmit} className="w-full mt-4">
          Submit
        </Button>
      </main>
    </div>
  );
}
