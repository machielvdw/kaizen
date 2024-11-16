"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

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

  const handleCommentChange = (categoryId: string, newComment: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, comment: newComment }
          : category
      )
    );
  };

  const options = [
    { value: "1", label: "1. Needs Improvement: Rarely applied in work" },
    {
      value: "2",
      label:
        "2. Infrequently Applied: Sometimes incorporated but not consistent",
    },
    {
      value: "3",
      label: "3. Developing: Showing improvement and reasonably consistent",
    },
    {
      value: "4",
      label: "4. Effective: Frequently applied with good outcomes",
    },
    {
      value: "5",
      label: "5. Mastered: Consistently applied, highly effective in this area",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {categories.map((category) => (
        <div key={category.id} className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {category.questions.map((question) => (
                <div key={question.id} className="mb-6">
                  <p className="mb-4 font-medium">{question.text}</p>
                  <RadioGroup
                    value={question.value.toString()}
                    onValueChange={(newValue) =>
                      handleValueChange(category.id, question.id, newValue)
                    }
                  >
                    {options.map((option) => {
                      const [boldPart, normalPart] = option.label.split(": ");
                      return (
                        <div
                          key={option.value}
                          className="flex items-center space-x-2 mb-1"
                        >
                          <RadioGroupItem
                            value={option.value}
                            id={`q${question.id}-${option.value}`}
                          />
                          <Label htmlFor={`q${question.id}-${option.value}`}>
                            <span className="font-bold">{boldPart}:</span>{" "}
                            {normalPart}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
              ))}
              <div className="mb-6">
                <Textarea
                  id={`comments-${category.id}`}
                  placeholder="Do you have any additional comments on this category?"
                  value={category.comment || ""}
                  onChange={(e) =>
                    handleCommentChange(category.id, e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
