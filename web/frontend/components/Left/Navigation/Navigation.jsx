import { useState } from "react";
import { Card, TextContainer, Text } from "@shopify/polaris";
import React from 'react';
import { Toast } from "@shopify/app-bridge-react";
import "./Navigation.css";
export function Navigation() {
  return (
 
       <div 
            style={{
              background: 'var(--p-color-bg-success-strong)',
              height: "50px",
            }}>
                  {/* 左侧图标 */}
                  <div className="mark"> 
                  <img src="https://img1.imgtp.com/2023/08/07/mkcOTOd8.svg" alt="AbandonedCartFilledMajor.svg" title="AbandonedCartFilledMajor.svg" />
                  </div>
                  <div className="word">
                      {/* 文字 */}
                        <Text variant="headingLg" as="h5">
                        Chat Interface
                        </Text>
                  </div>
                  {/* 导航栏按钮 */}
                 <button className="boo">Record</button>
        </div>
   
  );
}