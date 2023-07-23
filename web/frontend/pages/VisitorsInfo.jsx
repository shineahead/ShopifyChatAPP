import { useNavigate, TitleBar } from "@shopify/app-bridge-react";
import {
    Text,
    Button,
    Box,
    Icon,
    Listbox,
    Avatar
} from "@shopify/polaris";
import {
    UndoMajor,
    MobileBackArrowMajor
} from '@shopify/polaris-icons';

export default function VisitorsInfo() {
    //用来跳转的组件
    const navigate = useNavigate()
    //返回图标
    const icon_return = <Icon
        source={MobileBackArrowMajor}
        color="base"
    />
    //创建游客元素
    const Element = ({ name = "", position = "", condition }) => {
        var source;
        if (condition) source = "https://img1.imgtp.com/2023/07/23/lzi76vfF.png"
        else source = "https://img1.imgtp.com/2023/07/23/WUaT5Hzq.png"
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
                        <Avatar source="https://img1.imgtp.com/2023/07/23/CutcGuO2.jpg" />
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
    //创建函数组件
    const Placeholder = ({ label = '', height = 'auto', width = 'auto' }) => {
        return (
            <div
                style={{
                    background: 'var(--p-color-bg-info-subdued-hover)',
                    height: height,
                    width: width,
                    borderRadius: 'inherit',
                }}
            >
                <div
                    style={{
                        color: 'var(--p-color-text)',
                    }}
                >
                    <Text variant="headingXl" as="p" color="success">
                        {label}
                    </Text>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div height="300px" style={{
                background: 'rgb(221, 242, 251)',
                padding: "15px",
            }}>
                <Text as="span" variant="heading2xl">
                    Visitors on your site at the moment</Text>
                <div style={{
                    display: 'inline',
                    float: "right",
                    margin: "5px 20px 5px 0px"
                }}>
                    <Button
                        icon={icon_return}
                        background="bg-strong-hover"
                        plain>
                    </Button>
                </div>
                <div style={{
                    margin: "8px"
                }}>
                    <Text as="span" variant="headingLg">
                        total numbers:</Text>
                    <span style={{
                        fontSize: "25px",
                        fontFamily: "Microsoft Yahei",
                        color: "green"
                    }}>15</span>
                </div>
            </div>
            <div style={{ background: 'white', height: '1000px' }}>
                <div>
                    <ul style={{
                        margin: "0px",
                        padding: "15px 0px 15px 0px",
                        fontSize: "20px"
                    }}>
                        <li style={{
                            listStyle: "none",
                            display: "inline",
                            margin: "0px 15px 0px 35px",
                            fontWeight: "bold"
                        }}>Name</li>
                        <li style={{
                            listStyle: "none",
                            display: "inline",
                            margin: "0px 100px 0px 300px",
                            fontWeight: "bold"
                        }}>Avatar</li>
                        <li style={{
                            listStyle: "none",
                            display: "inline",
                            margin: "0px 200px 0px 100px",
                            fontWeight: "bold"
                        }}>Position</li>
                        <li style={{
                            listStyle: "none",
                            display: "inline",
                            margin: "15px",
                            fontWeight: "bold"
                        }}>Last Entered Time</li>
                    </ul>
                </div>
                {/* 展示游客信息 */}
                <Element name="shineahead" position="China" condition={false} />
                <Element name="shine" position="American" condition={true} />
                <Element name="木謹" position="France" condition={false} />
                <Element name="Sinsoledad" position="India" condition={true} />
            </div>
        </div >
    );
}
