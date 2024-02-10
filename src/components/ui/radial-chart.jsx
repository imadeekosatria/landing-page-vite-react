import { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
const RadialChart = () => {
  const options = {
    chart: {
      id: "analytic",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#cbd5e1",
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: "22px",
            color: "",
          },
          value: {
            fontSize: "16px",
            color: "",
          },
          total: {
            show: true,
            label: "Done",
            color: "",
            formatter: function () {
              return "90%";
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: "#0f172a",
      },
    },
    labels: ["Done", "In Progress", "To do"],
  };

  const series = [30, 60, 90];

  useEffect(() => {
    const ThemeSwitcher = () => {
      if (localStorage.theme === "dark") {
        ApexCharts.exec("analytic", "updateOptions", {
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  color: "#f8fafc",
                },
                value: {
                  color: "#f8fafc",
                },
                total: {
                  color: "#f8fafc",
                },
              },
            },
          },
        });
      } else if (localStorage.theme === "light") {
        ApexCharts.exec("analytic", "updateOptions", {
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  color: "#0f172a",
                },
                value: {
                  color: "#0f172a",
                },
                total: {
                  color: "#0f172a",
                },
              },
            },
          },
        });
      }
    };
    ThemeSwitcher();

    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        ThemeSwitcher();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <Chart options={options} series={series} type="radialBar" height={320} />
  );
};

export default RadialChart;
