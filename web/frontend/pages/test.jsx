import { useNavigate } from "@shopify/app-bridge-react";

export default function test() {
    const navigate = useNavigate()

    // 获取 URL 查询字符串
    const queryString = window.location.search;
    // 使用 URLSearchParams 解析参数
    const params = new URLSearchParams(queryString);
    // 读取参数值
    const productId = params.get('id');
    // 在页面中使用参数值
    console.log(`id: ${productId}`);

    return (
        <div style={{
            width: "200px",
            margin: "10px auto"
        }}>
            <h1 style={{
                color: "red",
                margin: "0px 0px 20px 0px",
                fontSize: "30px"
            }}>页面</h1>
            <button onClick={() => navigate("/VisitorsInfo")}>点击按钮返回</button>
        </div>
    )
}