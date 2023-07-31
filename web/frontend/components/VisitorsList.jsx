import {
    Text,
    Box,
    Avatar
} from "@shopify/polaris";

//展示游客信息的List
export function VisitorsList({ name = "", position = "", online }) {
    var source;
    if (online) source = "https://s1.ax1x.com/2023/07/31/pP9FNtI.png"
    else source = "https://s1.ax1x.com/2023/07/31/pP9FtAA.png"
    return (
        <div style={{
            margin: "20px"
        }}>
            <Box as="div"
                background="bg-info-subdued-hover"
                borderRadius="3" padding="8"
                position="relative"
            >
                {/* 名称 */}
                <div style={{
                    position: "absolute",
                    left: "15px",
                    bottom: "22px"
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "rgb(250, 112, 146)"
                    }}>{name}</p>
                </div>
                {/* 状态 */}
                <div style={{
                    position: "absolute",
                    left: "385px",
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
                    left: "410px",
                    bottom: "13px"
                }}>
                    <Avatar source="https://s1.ax1x.com/2023/07/31/pP9FG0H.jpg" />
                </div>
                {/* 定位 */}
                <div style={{
                    position: "absolute",
                    left: "650px",
                    bottom: "20px"
                }}>
                    <Text variant="headingLg" as="h5" >
                        {position}
                    </Text>
                </div>
                {/* 时间 */}
                <div style={{
                    position: "absolute",
                    left: "940px",
                    bottom: "20px"
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
                    <button style={{
                        height: "45px",
                        width: "120px",
                        border: "1px solid grey",
                        borderRadius: "8px",
                        fontSize: "18px",
                        fontFamily: "consolas",
                        color: "white",
                        backgroundColor: "rgb(90, 175, 142)"
                    }}>Start Chat</button>
                </div>
            </Box>
        </div>
    )
}