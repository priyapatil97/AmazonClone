import React, { useContext } from "react";
import "./Rightheader.css";
import Avatar from '@mui/material/Avatar';
import { Logincontext } from "../context/Contextprovider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';



const Rightheader = ({Logclose, logoutuser}) => {

    const { account, setAccount } = useContext(Logincontext)

    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                        account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }

                    {account ? <h4>Hello, {account.fname.toUpperCase()}</h4>:""}

                </div>
                <div className="nav_btn" onClick={()=>Logclose()} >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>

                    <Divider style={{width:"100%",marginLeft:"-20px"}} />

                    <NavLink to="/">Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your Orders</NavLink> : <NavLink to="/signin">Your Orders</NavLink>

                    }

                    <Divider style={{width:"100%",marginLeft:"-20px"}} />
                    <div className="flag">
                        <NavLink to="/" className="setting">Settings</NavLink>
                        <img src="./india.png" style={{width:35,marginLeft:10}} alt="" />
                    </div>
                    {
                        account ? <div className="flag">
                            <LogoutIcon style={{fontSize:18,marginRight:4}} />
                            <h3 onClick={()=>logoutuser()} style={{cursor:"pointer",fontWeight:500,fontSize:18}}>Logout</h3>
                        </div>:<NavLink to="/signin">Sign In</NavLink>
                    }

                </div>
            </div>
        </>
    );
}

export default Rightheader;