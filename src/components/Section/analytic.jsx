import { Card, CardOption, CardTitle } from "../ui/card"
import RadialChart from "../ui/radial-chart"
const Analytic = ()=>{
    return (
        <Card className="analytics-container">
            <div>
                <CardTitle>Analytics</CardTitle>
                <CardOption/>
            </div>
            <RadialChart />
        </Card>
    )
}

export default Analytic