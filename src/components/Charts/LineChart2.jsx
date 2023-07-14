import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,  DateTime} from '@syncfusion/ej2-react-charts';
import {  StripLine, ColumnSeries, Category,  DataLabel } from '@syncfusion/ej2-ng-charts';
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from "../../data/data";
const LineChart2=() =>{

    return (
        <ChartComponent
      id="lines-chart"
      height="213px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}
        title="Daily Training Completion"
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
export default LineChart2;
