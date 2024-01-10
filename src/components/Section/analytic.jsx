import { Card, CardOption, CardTitle } from "../ui/card"
import RadialChart from "../ui/radial-chart"
const Analytic = ()=>{
    return (
        <Card className="bg-white w-80 dark:bg-slate-800">
            <div className="flex justify-between dark:text-white">
                <CardTitle>Analytics</CardTitle>
                <CardOption/>
            </div>
            <RadialChart />
        </Card>
    )
}

export default Analytic