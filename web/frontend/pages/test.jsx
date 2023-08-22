import { useNavigate } from "@shopify/app-bridge-react";

export default function test() {
    const navigate = useNavigate()
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