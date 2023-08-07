import { useState } from "react";
import { Card, Avatar, Text } from "@shopify/polaris";
import React from 'react';
import { Toast } from "@shopify/app-bridge-react";
import "./Bar.css";
export function Bar() {
  return (
 
    <div style={{
      background: 'var(--p-color-bg-primary)',
      height: "50px",
    }}>
       {/* 头像 */}
        <div
          style={{
            float: 'left',
            padding: "5px 3px",
            width: "20%",
          }}>
              <Avatar source="https://img1.imgtp.com/2023/08/06/NTbTuB5J.jpg" />
        </div>
      {/* 用户名 */}
          <div
          style={{
            float: 'left',
            padding: "15px 0px 0px 90px",
            width: "60%",
          }}>
            <Text variant="headingLg" as="h5">
            Hai Gan
              </Text>
          </div>
      {/* 刷新 */}
   <div
    style={{
      float: 'right',
      width: "20%",
    }}> 
        <button className="btn2">
            <img src="./Image/SettingsMajor.svg" alt="tupian" />
            <div className="tip2">
              <button className="op">setting1</button>
              <button className="op">setting</button>
              <button className="op">setting</button>
              <button className="op">setting</button>
              <button className="op">setting</button>
            </div>
        </button>
        <button  className="btn2">
            <img src="./Image/ReplayMinor.svg" alt="tupian" />
            <div className="tip1">setting</div>
        </button>
     
    </div>      
</div>  
  );
}