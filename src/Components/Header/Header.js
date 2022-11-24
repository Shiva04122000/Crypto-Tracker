import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <Link to={"/"}>
        <h1 className='heading'>CrytoTracker <span style={{ color: "var(--blue)", fontFamily: "monospace" }}>.</span></h1>
      </Link>
      <div className="links">
          <Link className="link" to={"/"}>Home </Link>
          <Link className="link" to={"/compare"}>Compare </Link>
          <Link to={'/dashboard'}><button className="button">Dashboard</button></Link>
    
      </div>
      <div className='mobileview'>
        <MenuRoundedIcon
          style={{ color: "var(--white)" }}
          onClick={() => { setOpen(true) }} />
        <Drawer
          anchor={"right"}
          open={open}
          onClose={() => setOpen(false)}>
          <div className='drawer'>
            <Link to={'/'}>Home</Link>
            <Link to={'/compare'}>Compare</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header