import Chart from 'react-apexcharts'
const RadialChart = ()=>{
    const state = {
        series: [30, 60, 90],        
        options:{
            chart:{
                type: 'radialBar',
            },
            plotOptions:{
                radialBar:{
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: '#cbd5e1'
                    },
                    dataLabels:{
                        show: true,
                        name: {
                            fontSize: '22px'
                        },
                        value: {
                            fontSize: '16px'
                        },
                        total:{
                            show: true,
                            label: 'Done',
                            formatter: function(){
                                return '90%'
                            }
                        }
                    },
                },
            },
            legend:{
                show: true,
                position: 'bottom',
            },
            labels: ['Done', 'In Progress', 'To do'],
        }
      }
    
      
    return (
       <Chart options={state.options} series={state.series} type='radialBar' height={320}/>
    )
}

export default RadialChart