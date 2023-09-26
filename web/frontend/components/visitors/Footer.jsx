import "./Footer.css"
import { useNavigate } from "@shopify/app-bridge-react";

//展示底部分页器
export function Footer({ id = 0, page = 0 }) {
    const arr = []
    for (var i = 1; i <= page; i++)
        arr.push(i)

    const navigate = useNavigate();
    function btnClick(btn) {
        //获取button的key
        var id = btn.target.dataset.key
        navigate("/")
        navigate("/VisitorsInfo?id=" + id)
    }

    return (
        <div style={{
            height: "80px",
            borderTop: "1px solid white",
            backgroundColor: "rgb(244, 244, 245)"
        }}>
            <div style={{
                margin: "23px auto",
                width: "fit-content",
            }}>
                <button className="btnPage">上一页</button>
                {/* 循环渲染button */}
                {arr.map((i, index) => {
                    if (index + 1 == id)
                        return <button className="btnChoose" data-key={index + 1} onClick={(button) => {
                            btnClick(button)
                        }}>{i}</button>
                    else
                        return <button className="btnPage" data-key={index + 1} onClick={(button) => {
                            btnClick(button)
                        }}>{i}</button>
                })}
                {/* <button className="btnPage">1</button>
                <button className="btnOmit">...</button>
                <button className="btnPage">38</button>
                <button className="btnPage">39</button>
                <button className="btnChoose">40</button>
                <button className="btnPage">41</button>
                <button className="btnPage">42</button>
                <button className="btnOmit">...</button>
                <button className="btnPage">103</button> */}
                <button className="btnPage">下一页</button>
            </div>
        </div>
    )
} 