import { BarChart, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
const BarChartSection = () => {
  const data = [
    {
      month: "Oct",
      earn: 60,
      out: 50,
    },
    {
      month: "Nov",
      earn: 30,
      out: 25,
    },
    {
      month: "Dec",
      earn: 30,
      out: 20,
    },
    {
      month: "Jan",
      earn: 25,
      out: 18,
    },
    {
      month: "Feb",
      earn: 20,
      out: 10,
    },
  ];
  return (
    <ResponsiveContainer>
      <BarChart width={300} height={200} data={data} >
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 20, 40, 60]}
          tickFormatter={(v) => `$${v}`}
        />
        <Bar dataKey="earn" fill="#6366f1" />
        <Bar dataKey="out" fill="#a5b4fc" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSection;
