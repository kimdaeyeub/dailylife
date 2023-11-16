import ReactApexChart from "react-apexcharts";

const Chart = () => {
  return (
    <ReactApexChart
      type="line"
      options={{
        chart: {
          width: 100,
          height: 100,
          toolbar: {
            show: false,
          },
          background: "transparent",
        },
        grid: {
          show: false,
        },
        stroke: {
          curve: "smooth",
          width: 6,
        },
        labels: ["일", "월", "화", "수", "목", "금", "토"],
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            style: {
              // colors: [
              //   "#FFFFFF",
              //   "#FFFFFF",
              //   "#FFFFFF",
              //   "#FFFFFF",
              //   "#FFFFFF",
              //   "#FFFFFF",
              //   "#FFFFFF",
              // ],
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: { gradientToColors: ["#4000ff"], stops: [0, 100] },
        },
        colors: ["#f90fe1"],
      }}
      series={[
        {
          name: "",
          data: [91, 80, 70, 100, 93, 90, 83],
        },
      ]}
    />
  );
};

export default Chart;
