import './App.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import Healthfun from './components/healthsummary';
import Web2 from './components/web2';
import Web3 from './components/web3';
import { useState } from 'react';
function App() {
  const [theme,setTheme] =useState('true')
  function setmode(){
    setTheme(!theme)
  }
  return (
    <div className="App" style={{backgroundColor:theme ? 'white':'#1f1f1f',color:theme ? 'black' : 'white'}}>
      <header className="head-1"><b style={{fontSize:'2rem'}}>evoqins</b><div className="head-input"><input className="type" placeholder="search for domain" /><SearchOutlinedIcon className='search'/></div><div style={{display: 'flex', flexDirection:'colomn',height:'100%',justifyContent: 'space-between',width:'30%',alignItems: 'center',padding:'0.7rem'}}><NotificationAddOutlinedIcon/><Person3OutlinedIcon/><ListOutlinedIcon/><KeyboardArrowDownOutlinedIcon/><ShoppingCartOutlinedIcon/><NightlightRoundOutlinedIcon onClick={()=>setmode()} className='mui-nightmode'/></div></header>
      <header className="head-2"><div className="options first">Dashboard</div><div className="options">Manage Domain</div><div className="options">Report</div><div className="options">Social Media Accounts</div><div className="options">Templetes</div><div className="options">Coupons</div></header>
      <Healthfun theme={theme}/>
      <Web2 theme={theme}/>
      <Web3 theme={theme}/>
      <footer style={{ height: 30 }} className="footer">
        <div style={{ fontSize: 'small', color: 'white' }}>Copyrigth 2023 web23 LTD</div>
        <div style={{ fontSize: 'small', color: 'white', justifyContent: 'space-between', flexDirection: 'row' ,display: 'flex' }}>
          <div style={{ fontSize: 'medium', color: 'white' ,margin:'1rem'}}>Content</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>About</div>
          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>Privacy polocy</div>

          <div style={{ fontSize: 'medium', color: 'white',margin:'1rem' }}>FAQ'S</div>

        </div>
        <div style={{ fontSize: 'small', color: 'white' }}>powered by Evoquins</div>

      </footer>
    </div>
  );
}

export default App;
