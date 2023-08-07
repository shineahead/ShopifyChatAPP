import "./Send.css";
export function Send(){
        return (
                <div
                style={{  
                  background: 'var(--p-color-bg-success-subdued)',
                  height: "178px",
                }}
                >
                       <div style={{
                        height: "135px",
                       }}>
                       <textarea  placeholder="message" type="text" className="text" ></textarea>
                       </div>
                    {/* 工具栏 */}
                    <div
                     style={{
                      background: 'var(--p-color-bg-info-subdued-hover)',
                      height: "40px",
                    }}>
                      {/* 电话 */}
                        <button className="btn"
                           style={{
                            float: "left",
                            marginRight:"10px",  
                          }}>
                           <img src="./Image/video.svg" alt="tupian" />
                          </button>
                          {/* 电话 */}
                        <button className="btn"
                           style={{
                            float: "left",
                            marginRight:"10px",
                          }}>
                          <img src="./Image/PhoneMajor.svg" alt="tupian" />
                          </button>
                          <button className="btn"
                           style={{
                            float: "left",
                          }}>
                            {/* 上传文件 */}
                          <img src="./Image/FolderPlusMajor.svg" alt="文件夹" />
                          </button>
                          {/* 发送 */}
                          <button className="btn"
                          style={{
                            float:"right",
                            marginLeft:"10px",
                          }}
                          >
                            <img src="./Image/SendMajor.svg" alt="tupian" /> 
                          </button> 
                          {/* 表情                    */}
                          <button className="btn"
                           stylxe={{
                            float: "right",
                          }}>                         
                            <img src="./Image/SmileyHappyMajor.svg" alt="tupian" />
                          </button>  
                    </div>
                </div>
        )
}