

import * as React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';

function DonutChart() {
    const variouspiedata = [
                { x: 'Chapter A', y: 22 },
                { x: 'Chapter B', y: 34 },
                { x: 'Chapter C', y: 20 },
                { x: "Haven't Started Yet", y: 7 },
                { x: 'Finished Training', y: 17 },
              ];
  return (
      <AccumulationChartComponent
          titleStyle={{textAlignment:'Near',color:'#000',textOverflow:'Wrap',fontWeight:100}}
      id='pie-chart'
      legendSettings={{ visible: true }}
      enableSmartLabels={true}
      enableAnimation={true}
      tooltip={{ enable: true }}
          title='Finished Training'
          height='200px'
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={variouspiedata}
          xName='x'
          yName='y'
          innerRadius='20%'
        //   dataLabel={{
        //     visible: true,
        //     position: 'Outside',
        //     name: 'x',
        //     connectorStyle: { length: '10%' },
        //     font: { size: '14px', fontWeight: 'Normal' },
        //     format: '${point.x}: ${point.y}%',
        //   }}
          radius='80%'
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default DonutChart;
