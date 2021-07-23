import React, {useState} from 'react';
import './profile.css';

import { AiFillEdit } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export default function ProfilePage(){
    const [visible,setVisible] = useState(false);
    let midBox;
    const clickHandler = () => {
        setVisible(!visible);
    }
    if(visible===false){
        midBox = (
            <div className="balance-box">
                    <div className="money-balance-box">
                        <div className="money-balance-text">
                                ₹2340
                        </div>
                        <div className="wallet-balance-text">
                                Wallet
                        </div>
                    </div>
                    <div className="recharge-button-div">
                            <button className="recharge-button">Recharge</button>
                    </div>
            </div>
            )
    }else{
        midBox=(<div className="balance-box">
        <div className="col1-balance-box">
            <div className="money-balance-box">
                    <div className="date-balance-text">
                            30&nbsp; 
                    </div>
                    <div className="month-balance-text" style={{marginRight:0,display:"flex"}}>
                        Dec 2019
                    </div>
                    <div className="wallet-balance-text">
                            Validity
                    </div>
                </div>
            </div>
        <div className="col2-balance-box">
        <div className="money-balance-box">
                    <div className="date-balance-text">
                            1 
                    </div>
                    <div className="month-balance-text">
                            /&nbsp;2
                    </div>
                    <div className="wallet-balance-text">
                            Live Jobs
                    </div>
                </div>
        </div>
        <div className="col3-balance-box">
        <div className="money-balance-box">
                    <div className="date-balance-text">
                            20&nbsp;
                    </div>
                    <div className="month-balance-text">
                            /&nbsp;60
                    </div>
                    <div className="wallet-balance-text">
                            Responses
                    </div>
                </div>
        </div>
    </div>
)
        }
    return(
        <>
            <div className="name-box">
                <div className="name-and-edit">
                    <div className="company-name">
                        S and S Technologies
                    </div>
                    <div className="edit-button">
                        <AiFillEdit className="icon" style={{fontSize:"2em"}}/>
                    </div>
                </div>
                <div className="row1-company-name">
                    <div className="phone-number-company-name" >
                    <FaPhoneAlt className="icon"/>&nbsp;&nbsp;1234567890
                    </div>
                    <div className="email-company-name" >
                    <FaEnvelope className="icon" />&nbsp;&nbsp;john.doe@workindia.in
                    </div>
                </div>
                <div className="row2-company-name">
                    <div className="buisness-company-name" >
                    <FaBriefcase className="icon" />&nbsp;&nbsp;27AAECE0186G1ZR
                    </div>
                </div>
            </div>
            {midBox}
            
            <div className="options-box">
                <div onClick={clickHandler} className="my-transaction-text">
                <FaWallet className="icon" />&nbsp;&nbsp;My transactions
                </div>
                <div className="my-transaction-text">
                <AiOutlineShareAlt className="icon" />&nbsp;&nbsp;Share this app
                </div>
                <div className="my-transaction-text">
                <AiOutlineStar className="icon" />&nbsp;&nbsp;Rate Us
                </div>
                <div className="sign-out-text">
                <FaSignOutAlt className="icon" />&nbsp;&nbsp;Sign Out
                </div>
            </div>
        </>
    )
}   