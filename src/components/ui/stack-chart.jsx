import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip
  } from "recharts"

const StackChart = ()=>{
  const data = [
    {
      name: "Expanse & Income",
      expanse: 75,
      income: 40,
      max: 100
    },
  ];
  
    return (
      <ResponsiveContainer minWidth={185} height={25} maxHeight={270} width="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={
            { 
              top: 0,
              bottom: 0,
              right: -20,
              left: 0
            }
          }
        >
          <XAxis type="number" hide={true}/>
          <YAxis dataKey="name" type="category" hide={true} width={90}/>
          <Tooltip/>
          <Bar dataKey="expanse" stackId="a" fill="#8b5cf6"/>
          <Bar dataKey="income" stackId="a" fill="#fbbf24" />
        </BarChart>
      </ResponsiveContainer>
  
    )
}

export default StackChart