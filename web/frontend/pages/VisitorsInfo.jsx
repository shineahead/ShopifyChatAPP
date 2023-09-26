import React from 'react';
//导入游客的组件元素
import {
    VisitorsList,
    VisitorsTitle,
    VisitorsName,
    Footer
} from "../components/visitors"

export default function VisitorsInfo() {
    // 获取 URL 查询字符串
    const queryString = window.location.search;
    // 使用 URLSearchParams 解析参数
    const params = new URLSearchParams(queryString);
    // 读取参数值
    const id = params.get('id');
    //总数据量
    var totalCnt = 29;
    //每一页最多4条
    var Cnt = 4;
    //需要分的页数
    var page = Math.ceil(totalCnt / Cnt)
    //总数据数组
    var arr = [
        { name: "please", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "please", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine222", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹哈桑打开可能", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "Sinsoledad", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shineahead", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "please", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine222", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹哈桑打开可能", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "Sinsoledad", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shineahead", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "please", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine222", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹哈桑打开可能", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "Sinsoledad", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shineahead", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "please", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine222", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹哈桑打开可能", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "木謹", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shine", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "Sinsoledad", position: "China", clientId: "21626", newMessage: true, online: false },
        { name: "shineahead", position: "China", clientId: "21626", newMessage: true, online: false }
    ]
    var now = []
    //截取当前界面的数据数组
    for (var i = Cnt * (id - 1); i < totalCnt && i < Cnt * (id - 1) + 4; i++)
        now.push(arr[i])

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

                {/* 使用循环展示数据 */}
                {now.map(
                    (i, index) => {
                        return <VisitorsList name={i.name} position={i.position} clientId={i.clientId}
                            newMessage={i.newMessage} online={i.online} key={index} />
                    }
                )}
                {/* 展示游客信息 */}
                {/* <VisitorsList name="please" position="China" clientId="21626" newMessage={true} online={false} />
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
                <VisitorsList name="shineahead" position="China" clientId="21626" newMessage={true} online={false} />
                <VisitorsList name="shine" position="American" clientId="91543" online={true} />
                <VisitorsList name="木謹" position="France" clientId="13026" newMessage={true} online={false} />
                <VisitorsList name="Sinsoledad" position="India" clientId="15556" online={true} /> */}
                <Footer id={id} page={page} />
            </div>
        </div >
    );
}
