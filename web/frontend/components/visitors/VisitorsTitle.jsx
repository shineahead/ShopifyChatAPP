import {
    Text,
    Button,
    Icon
} from "@shopify/polaris";
import {
    MobileBackArrowMajor,
    ReplayMinor
} from '@shopify/polaris-icons';

//游客TitleBar界面
export function VisitorsTitle({ }) {
    //返回图标
    const icon_return = <Icon
        source={MobileBackArrowMajor}
        color="base"
    />
    //刷新图标
    const icon_fresh = <Icon
        source={ReplayMinor}
        color="base"
    />
    return (
        <div height="300px" style={{
            background: 'rgb(221, 242, 251)',
            // background: 'rgb(220, 220, 230)',
            padding: "15px",
            fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
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
                display: "inline",
                float: "right",
                margin: "5px 20px 5px 0px"
            }}>
                <Button
                    icon={icon_fresh}
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
                    fontFamily: "Lovelace",
                    color: "green"
                }}>255</span>
            </div>
        </div>
    )
}