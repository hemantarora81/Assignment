// import * as React from "react";
// import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
// function PieChart() {

//     return <AccumulationChartComponent id='charts'>
//       <AccumulationSeriesCollectionDirective>
//         <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' innerRadius='40%'>
//         </AccumulationSeriesDirective>
//       </AccumulationSeriesCollectionDirective>
//     </AccumulationChartComponent>;
// }
// ;
// export default PieChart;
import * as React from "react";
import {Inject, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

function PieChart() {
  const dataSource = [
    { x: 'Passed Workers', y: 60,color:'green' },
      { x: 'Failed Workers', y: 40, color:'red'},
    ];
    const datalabel = {
        visible: true, position: 'Inside', textWrap: 'Wrap',
        name: 'text',
    };
  return (
      <AccumulationChartComponent id='pies-charts'
          
            height='210px'
            title="Quiz Passing %"
            titleStyle={{ textAlignment: 'Near', color: '#000', textOverflow: 'Wrap', fontWeight: 100 }}
            enableAnimation={true}
            tooltip={{ enable: true }}
            legendSettings={{ visible: true }}
            enableSmartLabels={true}
      >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
          
          <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                  dataLabel={datalabel}
          dataSource={dataSource}
          xName='x'
          yName='y'
          innerRadius='40%'
         
          palette={['green', 'red']}
                  radius="100%"
        >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default PieChart;
