//游客信息说明
export function VisitorsName() {
    return (
        <div>
            <ul style={{
                margin: "0px",
                padding: "15px 0px 15px 0px",
                fontSize: "20px",
                fontFamily: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
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
                    margin: "0px 15px 0px 115px",
                    fontWeight: "bold"
                }}>ClientId</li>
                <li style={{
                    listStyle: "none",
                    display: "inline",
                    margin: "0px 100px 0px 100px",
                    fontWeight: "bold"
                }}>Avatar</li>
                <li style={{
                    listStyle: "none",
                    display: "inline",
                    margin: "0px 200px 0px 102px",
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
    )
}