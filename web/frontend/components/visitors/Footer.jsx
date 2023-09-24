import "./Footer.css"

//展示底部分页器
export function Footer() {
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
                <button className="btnPage">1</button>
                <button className="btnOmit">...</button>
                <button className="btnPage">38</button>
                <button className="btnPage">39</button>
                <button className="btnPage" style={{
                    backgroundColor: "rgb(79, 176, 82)",
                    fontWeight: "normal",
                    color: "white"
                }}>40</button>
                <button className="btnPage">41</button>
                <button className="btnPage">42</button>
                <button className="btnOmit">...</button>
                <button className="btnPage">103</button>
                <button className="btnPage">下一页</button>
            </div>
        </div>
    )
} 