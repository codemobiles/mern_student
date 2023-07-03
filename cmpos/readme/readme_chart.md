# Setup chart

- yarn add chart.js react-chartjs-2 faker@5.5.3 @types/faker@5.5.3
- get example from: https://react-chartjs-2.js.org/examples/line-chart/
- modify to fit typescript:

```ts
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

// https://react-chartjs-2.js.org/examples/line-chart
// 1. Copy line_chart_demo.tsx using faker
// 2. Add two dependencies into package.json
//    yarn add faker@5.5.3
//    yarn add --dev @types/faker@5.5.3
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function ChartJSFaker() {
  return <Line options={options} data={data} />;
}
```
