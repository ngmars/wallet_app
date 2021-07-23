import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ProfilePage from './Containers/profile';
import {Layout} from 'antd';
import { FaBriefcase } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
const {Header, Footer,Content} = Layout;
function App() {
  // style={{marginLeft:"40vw",textAlign: 'center',height:"6vh",marginBottom:"1vh",display:"flex"}}
  return (
    <Layout className="App">
      <Header style={{backgroundColor:"#324192",height:"3vh"}}/>
      <Content style={{height:"91vh",backgroundColor:"#E5E5E5"}}>
      <ProfilePage/>
      </Content>
    <Footer style={{ align: 'center', height:"6vh",padding:"0"}}>
      <div style={{width:"60%",marginLeft:"40%" ,marginRight:"40%" }}>   
        <div className='footer-icon'>
            <FaBriefcase className="icon" />
        </div>
        <div className='footer-icon'>
            <FaWallet className="icon" />
        </div>
        <div className='footer-icon'>
            <BsPlusCircleFill className="icon" />
        </div>
        <div className='footer-icon'>
            <AiFillInfoCircle className="icon" />
        </div>
        <div className='footer-icon'>
            <FaUserAlt className="icon" />
        </div>
      </div>   
    </Footer>
    </Layout>
  );
}

export default App;
