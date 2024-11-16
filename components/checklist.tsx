"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Question = {
  id: string;
  text: string;
  value: number;
};

type Category = {
  id: string;
  title: string;
  questions: Question[];
};

type ChecklistProps = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

export default function Checklist({
  categories,
  setCategories,
}: ChecklistProps) {
  const handleValueChange = (
    categoryId: string,
    questionId: string,
    newValue: string
  ) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              questions: category.questions.map((q) =>
                q.id === questionId ? { ...q, value: parseInt(newValue) } : q
              ),
            }
          : category
      )
    );
  };

  const options = [
    { value: "1", label: "1. Needs Improvement" },
    { value: "2", label: "2. Infrequently Applied" },
    { value: "3", label: "3. Developing" },
    { value: "4", label: "4. Effective" },
    { value: "5", label: "5. Mastered" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
          {category.questions.map((question) => (
            <div key={question.id} className="mb-6">
              <p className="mb-2 font-medium">{question.text}</p>
              <RadioGroup
                value={question.value.toString()}
                onValueChange={(newValue) =>
                  handleValueChange(category.id, question.id, newValue)
                }
              >
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 mb-1"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={`q${question.id}-${option.value}`}
                    />
                    <Label htmlFor={`q${question.id}-${option.value}`}>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
