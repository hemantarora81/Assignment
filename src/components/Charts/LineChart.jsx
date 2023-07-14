import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,  DateTime } from '@syncfusion/ej2-react-charts';
import {  StripLine, ColumnSeries, Category,  DataLabel } from '@syncfusion/ej2-ng-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from "../../data/data";
const LineChart=() =>{

    return (
        <ChartComponent
      id="line-chart"
      height="200px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    //   background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
        title="Last 14 Days Active Workers In Training"
        // titleStyle={{textAlign: 'left' ,color: 'blue'}}
        style={{ color: 'blue', marginLeft: 0 }}
        titleStyle={{textAlignment:'Near',color:'#000',textOverflow:'Wrap',fontWeight:100}}
    >
       <Inject services={[ColumnSeries, DataLabel, Category, StripLine,DateTime]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} /> )}
      </SeriesCollectionDirective>
    </ChartComponent>
    )
}
;
export default LineChart;
