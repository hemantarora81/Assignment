import * as React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, AreaSeries} from '@syncfusion/ej2-react-charts';

function AreaChart() {
  const generateRandomData = () => {
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S'];
    const data = daysOfWeek.map((day) => ({
      x: day,
      y: Math.floor(Math.random() * 201) - 100, // Generate a random value between -100 and 100
    }));
    return data;
  };

  const variouspiedata = generateRandomData();

  const LinePrimaryXAxis = {
    title: 'Date',
    valueType: 'Category',
    labelPlacement: 'OnTicks',
    labels: ['M', 'T', 'W', 'T', 'F', 'S'],
    color: 'blue',
  };
  const LinePrimaryYAxis = {
    title: 'Value',
    minimum: -100,
    maximum: 100,
    interval: 50,
    color: 'blue',
    visible: false, 
    fill:true
  };

  return (
      <ChartComponent id='area-charts' height='120px'
          primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}
          title='In Training Workers'
          titleStyle={{ textAlignment: 'Near', color: '#000', textOverflow: 'Wrap',fontWeight:100 }}
          
      >
      <Inject services={[Category, AreaSeries]} />
      <SeriesCollectionDirective>
      <SeriesDirective
          dataSource={variouspiedata}
          xName='x'
          yName='y'
          innerRadius='20%'
          type='Area'
        />
          </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default AreaChart;
