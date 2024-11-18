"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RadarChart from "@/components/radar-chart";

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

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<{
    reviewerName: string;
    engineerName: string;
    categories: Category[];
  } | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) {
      console.error("No ID provided in URL");
      router.push("/");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/get-feedback?id=${id}`);
        const result = await response.json();
        if (response.ok && result.data) {
          setData(result.data);
        } else {
          console.error("Error fetching data:", result.error);
          router.push("/");
        }
      } catch (error) {
        console.error("Error:", error);
        router.push("/");
      }
    };

    fetchData();
  }, [router, searchParams]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Results
        </h1>
        <p className="leading-7 mt-2">
          Thank you for completing the checklist. You can bookmark this page to
          come back to it later.
        </p>
        <div className="w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>Engineer: {data.engineerName}</div>
            <div>Reviewer: {data.reviewerName}</div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <RadarChart categories={data.categories} />
        </div>
        <div className="w-full max-w-3xl mx-auto mt-8">
          {data.categories.map((category) => {
            const totalScore = category.questions.reduce(
              (sum, q) => sum + q.value,
              0
            );
            const averageScore = (
              totalScore / category.questions.length
            ).toFixed(1);

            return (
              <div key={category.id} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {category.title} (Average: {averageScore}/5)
                </h2>
                <ul className="list-disc pl-5">
                  {category.questions.map((question) => (
                    <li key={question.id} className="mb-1">
                      <span className="font-medium">{question.text}</span>:
                      <span
                        className={
                          question.value >= 4
                            ? "text-green-600"
                            : question.value >= 2
                            ? "text-yellow-600"
                            : "text-red-600"
                        }
                      >
                        {" "}
                        {question.value}/5
                      </span>
                    </li>
                  ))}
                </ul>
                {category.comment && (
                  <div className="mt-2">
                    <span className="font-medium">Comment:</span>{" "}
                    {category.comment}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
