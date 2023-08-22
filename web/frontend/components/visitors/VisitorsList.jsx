import { useNavigate } from "@shopify/app-bridge-react";
import {
    Text,
    Avatar
} from "@shopify/polaris";
import "./VisitorsList.css"

//展示游客信息的List
export function VisitorsList({ name = "", position = "", clientId = "",
    newMessage = false, online = false }) {
    //用来跳转的组件
    const navigate = useNavigate()
    //是否在线
    var source;
    if (online) source = "https://s1.ax1x.com/2023/07/31/pP9FNtI.png"
    else source = "https://s1.ax1x.com/2023/07/31/pP9FtAA.png"
    return (
        <div style={{
            margin: "20px 0px 20px 0px"
        }}>
            <div className="divList"
            >
                {/* 名称 */}
                <div style={{
                    position: "absolute",
                    left: "35px",
                    bottom: "22px"
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#663399",
                        fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
                    }}>{name}</p>
                </div>
                {/* 客服ID */}
                <div style={{
                    position: "absolute",
                    left: "220px",
                    bottom: "22px",
                    fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
                    fontSize: "20px"
                }}>
                    #{clientId}
                </div>
                {/* 状态 */}
                <div style={{
                    position: "absolute",
                    left: "405px",
                    bottom: "25px",
                }}>
                    <img src={source} style={{
                        display: "block",
                        height: "10px",
                        width: "10px"
                    }} />
                </div>
                {/* 头像 */}
                <div style={{
                    position: "absolute",
                    left: "430px",
                    bottom: "13px"
                }}>
                    <Avatar source="https://s1.ax1x.com/2023/07/31/pP9FG0H.jpg" />
                </div>
                {/* 定位 */}
                <div style={{
                    position: "absolute",
                    left: "670px",
                    bottom: "20px",
                    fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
                }}>
                    <Text variant="headingLg" as="h5" >
                        {position}
                    </Text>
                </div>
                {/* 定位图标 */}
                <div style={{
                    position: "absolute",
                    left: "775px",
                    bottom: "22px",
                }}>
                    <img src="https://s1.ax1x.com/2023/08/01/pP9HWB8.png" style={{
                        display: "block",
                        height: "20px",
                        width: "35px"
                    }} />
                </div>
                {/* 时间 */}
                <div style={{
                    position: "absolute",
                    left: "960px",
                    bottom: "20px",
                    fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
                }}>
                    <Text variant="headingLg" as="h5" >
                        2023/7/23 12:01
                    </Text>
                </div>
                {/* Start Chat */}
                <div style={{
                    position: "absolute",
                    right: "50px",
                    bottom: "10px"
                }}>
                    <button className="btnStartChat" onClick={
                        //跳转不同的页面
                        () => navigate("/test")
                    }>
                        {/* 是否有新消息 */}
                        {newMessage ?
                            <img src="https://s1.ax1x.com/2023/08/04/pPFyiWT.png"
                                style={{
                                    display: "block",
                                    position: "absolute",
                                    right: "0px",
                                    bottom: "30px",
                                    height: "15px",
                                    width: "15px"
                                }} />
                            : null}
                        <div>Start Chat</div>
                    </button>
                </div>
            </div>
        </div>
    )
}