import ReactECharts from "echarts-for-react";

import { Category } from "@/lib/types";

type RadarChartProps = {
  categories: Category[];
};

export default function RadarChart({ categories }: RadarChartProps) {
  const indicators = categories.map((category) => ({
    name: category.title,
    max: 5,
  }));

  const dataValues = categories.map((category) => {
    const total = category.questions.reduce(
      (sum, question) => sum + question.value,
      0
    );
    return parseFloat((total / category.questions.length).toFixed(2));
  });

  const option = {
    tooltip: {},
    radar: {
      indicator: indicators,
    },
    series: [
      {
        name: "Checklist Evaluation",
        type: "radar",
        data: [
          {
            value: dataValues,
            name: "Score",
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
  );
}
