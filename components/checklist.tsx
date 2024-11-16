"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Question = {
  id: number;
  text: string;
  value: number;
};

export default function Checklist() {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, text: "How well did you sleep last night?", value: 50 },
    { id: 2, text: "How productive were you today?", value: 50 },
    { id: 3, text: "How would you rate your stress level?", value: 50 },
    {
      id: 4,
      text: "How satisfied are you with your work-life balance?",
      value: 50,
    },
    { id: 5, text: "How healthy were your eating habits today?", value: 50 },
  ]);

  const handleSliderChange = (id: number, newValue: number[]) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, value: newValue[0] } : q))
    );
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", questions);
    // Here you would typically send this data to a server
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Daily Check-in</CardTitle>
        <CardDescription>
          Please answer the following questions using the sliders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {questions.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="mb-2 font-medium">{question.text}</p>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[question.value]}
              onValueChange={(newValue) =>
                handleSliderChange(question.id, newValue)
              }
              className="mb-1"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Not at all</span>
              <span>Neutral</span>
              <span>Completely</span>
            </div>
          </div>
        ))}
        <Button onClick={handleSubmit} className="w-full mt-4">
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
