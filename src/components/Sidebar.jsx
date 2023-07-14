import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import Logo from '../assets/chaabiLogo.webp'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const toolbarStyle = {
    backgroundImage: 'linear-gradient(to right top, #6878ff, #5d71fb, #506af7, #4263f3, #305cef, #2a55e4, #244fd9, #1e48ce, #2540ba, #2739a7, #283294, #272b82)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };
  
const Sidebar = () => {
    const details = [
        {
            id:1,
            name: 'Dashboard',
            icon: <DashboardRoundedIcon color='primary' />,
            route:'/dashboard'
        }, {
            id:2,
            name: 'Training',
            icon:<ModelTrainingOutlinedIcon color='primary'/>,
            route:'/training'
        }, {
            id:3,
            name: 'Users',
            icon: <LocalActivityIcon color='primary' />,
            route:'/users'
        }, {
            id:4,
            name: 'Analytics',
            icon: <PinDropIcon color='primary' />,
            route:'/analytics'
        }, {
            id:5,
            name: 'My Account',
            icon: <PinDropIcon color='primary' />,
            route:'/account'
        }, {
            id:6,
            name: 'Support',
            icon: <PinDropIcon color='primary' />,
            route:'/support'
            
         }
     ]
  return (
    <Box sx={{ display: 'flex', overflow:'auto' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={toolbarStyle}>
          <Typography variant="h6" sx={{ my: '10px', fontWeight: 'bold' ,fontSize:'38px'}} >
            Hello,Hemant Arora
                  </Typography>
                  <Divider />
                  <Typography variant='subtitle2' sx={{ mb: '20px',fontWeight:300 }}>
                      Following is Your Organization's Perfomance Summary
                  </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
              <Box sx={{ p: 2,mt:'20px' }} color='#fff'>
              <img src={Logo} alt="Logo"  width='154px'/>
              </Box>
        <Divider />
        <List sx={{p:2,fontSize:'10px' }} >
          {details.map((detail) => (
              <Link to={`${detail.route} `} style={{textDecoration:'none'}}>
                   <ListItem key={detail.id}>
                      <ListItemButton
                          
                          sx={{
                      '&:hover': {
                          backgroundColor: 'blue',
                          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                              color: 'white',
                              borderRadius: '5px'
                          }
                      }
                  }}>
                      <ListItemIcon style={{alignItems:'center'}} >
                          {detail.icon}
                </ListItemIcon>
                <ListItemText primary={detail.name} sx={{color:'blue',textDecoration:'none'}} />
              </ListItemButton>
            </ListItem>
            </Link>
           
          ))}
        </List>
       
      </Drawer>
     
    </Box>
  );
}
export default Sidebar;