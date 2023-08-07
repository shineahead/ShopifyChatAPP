
import "./index.css";
import {Navigation} from "../components/Left/Navigation/Navigation"
import {Search} from "../components/Left/Search/Search"
import {List} from "../components/Left/List/List"
import {Bar} from "../components/Middle/Bar/Bar"
import {Message} from "../components/Middle/Message/Message"
import {Send} from "../components/Middle/Send/Send"
import {Bar1} from "../components/Right/Bar1/Bar1"
import {Information} from "../components/Right/Information/Information"
export default function HomePage() {
        
        // 聊天框
       
  return (
    <div
    style={{
     padding: "0px",
   
   }}>
     {/* 最左侧页面 */}
            <div 
            style={{
              background: 'var(--p-color-bg)',
              float: "left",
              height: "710px",
              width: "25%", 
              padding: "0px",
            }}>
                  <Navigation/>
                    {/* 搜索框 */}
                  <Search/>
                  <List/>
            </div>
      {/* 中间页面 */}
         <div
          style={{
            background: 'var(--p-color-bg-success-subdued)',
            float: "left",
            height: "710px",
            width: "50%", 
            padding: "0px",
          }}>
                <div
                style={{
                  background: 'var(--p-color-bg-success-subdued)',
                  height: "75%",
                }}
                >
                   {/* 导航栏 */}
                  <Bar/>  
                        <button className="close">
                          <div style={{
                                    width:"20px",
                                    float:"left",}}>
                          <img src="./Image/ArrowRightMinor.svg" alt="tupian" />
                          </div>
                          close
                        </button> 
                  {/* 聊天框     */}
                  <Message/>
                </div>
                {/* 聊天框 */}
               <Send/>
          </div>
          {/* 最右侧页面 */}
          <div 
          style={{
            background: 'var(--p-color-bg-primary-subdued-active)',
            float: "left",
            height: "710px",
            width: "25%", 
            padding: "0px",
          }}
          >
            <Bar1/>
            <Information/>
          </div>
      </div>
   
  );
}
