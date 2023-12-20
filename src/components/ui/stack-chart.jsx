import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
  } from "recharts"

const StackChart = ()=>{
  const data = [
    {
      name: "Expanse Income",
      expanse: 75,
      income: 40,
      max: 100
    },
  ];
  
    return (
      <BarChart
      width={260}
      height={25}
      data={data}
      layout="vertical"
      margin={
        { 
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }
      }
    >
      <XAxis type="number" hide={true}/>
      <YAxis dataKey="name" type="category" hide={true} width={90}/>
      <Bar dataKey="expanse" stackId="a" fill="#8b5cf6"/>
      <Bar dataKey="income" stackId="a" fill="#fbbf24" />
    </BarChart>
  
    )
}

export default StackChart