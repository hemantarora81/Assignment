

export const LinePrimaryXAxis = {
  title: 'Date',
  valueType: 'DateTime',
  labelFormat: 'dd', // Display only the day of the month
  minimum: new Date(2023, 5, 3), // June 3, 2023
  maximum: new Date(2023, 5, 14), // June 14, 2023
  intervalType: 'Days',
  interval: 1, // Display labels for each day
  color:'blue'
};
export const LinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 0,
  maximum: 400,
  interval: 100,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};


export const lineCustomSeries = generateRandomData(new Date(2023, 5, 3), new Date(2023, 5, 14));

function generateRandomData(startDate, endDate) {
  const seriesData = [];

  for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const randomY = Math.floor(Math.random() * (400 - 0 + 1) + 0);
    const dataPoint = {
      dataSource: [{ x: new Date(date), y: randomY }],
      xName: 'x',
      yName: 'y',
      name: formatDate(date), // Format the date as needed
      width: 10,
      type: 'Column',
      color:'blue'
    };

    seriesData.push(dataPoint);
  }

  return seriesData;
}

function formatDate(date) {
  const options = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


