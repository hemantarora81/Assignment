import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import Home from './components/Home';
function App() {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
            <BrowserRouter>
                <Sidebar />
                <Routes>        
              <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Home />} />
                    {/* <Route path='/delete' element={<DeleteNotes />} /> */}
                </Routes>
            </BrowserRouter>
         </Box>
  );
}

export default App;
