import { LineChart, Line } from 'recharts';
const TinyChart =()=>{
    const data = [
        {
            month: 'Oct',
            balance: 1
        },
        {
            month: 'Nov',
            balance: 2.5
        },
        {
            month: 'Dec',
            balance: 1.5
        },
        {
            month: 'Jan',
            balance: 5
        },
        {
            month: 'Feb',
            balance: 1
        },
        {
            month: 'Mar',
            balance: 3
        }
    ]
    return (
        <LineChart width={95} height={40} data={data}>
            <Line type='monotone' stroke="#8884d8" dataKey='balance' strokeWidth={2} dot={false}/>
        </LineChart>
    )
}

export default TinyChart