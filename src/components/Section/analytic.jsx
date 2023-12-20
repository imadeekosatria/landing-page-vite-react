import { Card, CardOption, CardTitle } from "../ui/card"
import RadialChart from "../ui/radial-chart"
const Analytic = ()=>{
    return (
        <Card className="bg-white max-2xl:w-80">
            <div className="flex justify-between">
                <CardTitle>Analytics</CardTitle>
                <CardOption/>
            </div>
            <RadialChart/>
        </Card>
    )
}

export default Analytic