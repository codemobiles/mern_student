import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, ButtonGroup, IconButton, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import "chart.js/auto";
import { ChartData, ChartOptions, ChartType } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";

const Report = () => {
  const [chartType, setChartType] = useState<ChartType>("line");
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  function getRandomInt(): any {
    const randoms = [];
    for (let index = 0; index < 8; index++) {
      randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
    }
    return randoms;
  }

  const data: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue 2022",
        fill: true,
        // tension: 0.3, // line curve
        backgroundColor: [
          "rgba(54, 162, 235, 0.1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 10, // circle
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData1,
      },
      {
        label: "Revenue 2023",
        fill: false,
        // tension: 0.1, // line curve
        borderWidth: 0.5, // line thiness
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(220,220,220,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 10, // circle
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(220,220,220,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData2,
      },
    ],
  };

  const chartOption: ChartOptions = {
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function () {
            return "CodeMobiles";
          },
        },
      },
      legend: { display: true },
      title: {
        display: true,
        text: "CodeMobiles ChartJS",
        position: "top",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value: any, _index: any, _values: any) {
            return "฿" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
      },
    },
  };

  useEffect(() => {
    setChartData1(getRandomInt());
    setChartData2(getRandomInt());
  }, []);

  return (
    <Paper sx={{ padding: 4 }}>
      <Typography variant="h1">Sale Chart</Typography>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button variant={chartType === "line" ? "contained" : "outlined"} onClick={() => setChartType("line")}>
          Line
        </Button>
        <Button variant={chartType === "bar" ? "contained" : "outlined"} onClick={() => setChartType("bar")}>
          Bar
        </Button>
        <Button variant={chartType === "pie" ? "contained" : "outlined"} onClick={() => setChartType("pie")}>
          Pie
        </Button>
      </ButtonGroup>
      <IconButton
        aria-label="refresh"
        onClick={() => {
          setChartData1(getRandomInt());
          setChartData2(getRandomInt());
        }}
      >
        <RefreshIcon />
      </IconButton>
      <Box sx={{ height: "50vh" }}>
        <Chart type={chartType} data={data} width="100%" options={chartOption} />
      </Box>
    </Paper>
  );
};

export default Report;
