import {
    Text,
    Button,
    Icon
} from "@shopify/polaris";
import {
    MobileBackArrowMajor
} from '@shopify/polaris-icons';

//游客TitleBar界面
export function VisitorsTitle({ }) {
    //返回图标
    const icon_return = <Icon
        source={MobileBackArrowMajor}
        color="base"
    />
    return (
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
    )
}