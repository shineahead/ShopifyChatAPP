import React from 'react';
//导入游客的组件元素
import {
    VisitorsList,
    VisitorsTitle,
    VisitorsName,
    Footer
} from "../components/visitors"

export default function VisitorsInfo() {
    return (
        <div>
            {/* 展示游客界面的TitleBar */}
            <VisitorsTitle />
            <div style={{
                background: 'white',
                borderBottom: "1px solid grey",
                borderRadius: "5px"
            }}>
                {/* 游客信息说明 */}
                <VisitorsName />
                {/* 展示游客信息 */}
                <VisitorsList name="please" position="China" clientId="21626" newMessage={true} online={false} />
                <VisitorsList name="shine222" position="American" clientId="91543" online={true} />
                <VisitorsList name="木謹哈桑打开可能" position="France" clientId="13026" newMessage={true} online={false} />
                <VisitorsList name="Sinsoledad" position="India" clientId="15556" online={true} />
                <VisitorsList name="shineahead" position="China" clientId="21626" newMessage={true} online={false} />
                <VisitorsList name="shine" position="American" clientId="91543" online={true} />
                <VisitorsList name="木謹" position="France" clientId="13026" newMessage={true} online={false} />
                <VisitorsList name="Sinsoledad" position="India" clientId="15556" online={true} />
                <VisitorsList name="shineahead" position="China" clientId="21626" newMessage={true} online={false} />
                <VisitorsList name="shine" position="American" clientId="91543" online={true} />
                <VisitorsList name="木謹" position="France" clientId="13026" newMessage={true} online={false} />
                <VisitorsList name="Sinsoledad" position="India" clientId="15556" online={true} />
                <Footer />
            </div>
        </div >
    );
}
