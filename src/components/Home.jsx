import React from 'react'
import LineChart from './Charts/LineChart';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DonutChart from './Charts/DonutChart';
import AreaChart from './Charts/AreaChart';
import DonutChart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import LastChart from './Charts/LastChart';
import LineChart2 from './Charts/LineChart2';
import PieChart from './Charts/PieChart';

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
      <Grid container spacing={1} sx={{pt:18,pl:5,pr:1,backgroundColor:'#72b7f7',boxShadow:'none'}} alignItems='center'>
          <Grid item xs={3} >
    <Item><AreaChart/></Item>
      </Grid>
      <Grid item xs={3} >
    <Item><DonutChart2/></Item>
  </Grid>
  <Grid item xs={3} >
    <Item><Chart3/></Item>
      </Grid>
      <Grid item xs={3} >
  <Item><LastChart/></Item>
  </Grid>
  
  <Grid item xs={3}>
        <Item>
          <DonutChart />
        </Item>
  </Grid>
  <Grid item xs={9} >
    <Item><LineChart/></Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <PieChart/>
        </Item>
  </Grid>
  <Grid item xs={9} >
    <Item><LineChart2/></Item>
      </Grid>

    </Grid>
  )
}

export default Home