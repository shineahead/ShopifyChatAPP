import { Listbox,} from "@shopify/polaris";    
import {CirclePlusMinor} from '@shopify/polaris-icons';
import "./Information.css"
export function Information() {
        return (
         <div>
        <Listbox accessibilityLabel="Basic Listbox example">
                <Listbox.Option value="UniqueValue-1">
                     <button className="btn1">
                     <img src="https://img1.imgtp.com/2023/07/25/P4GuOhV5.svg" Icon={CirclePlusMinor} alt="tupian" />
                     </button>
                     <div className="tip">
                       Mae Jemison
                     </div>
                </Listbox.Option>
                <Listbox.Option value="UniqueValue-2">
                  <button className="btn1">
                     <img src="https://img1.imgtp.com/2023/07/25/0boKBT0g.svg" alt="tupian" />  
                   </button>
                    <div className="tip">
                     China
                    </div>
                </Listbox.Option>
                <Listbox.Option value="UniqueValue-3">
                  <button className="btn1">
                     <img src="https://img1.imgtp.com/2023/07/25/jO2JOiIP.svg"  alt="tupian" />  
                  </button>
                    <div className="tip">
                     2753899798@qq.com
                    </div>
                </Listbox.Option>
                <Listbox.Option value="UniqueValue-3">
                  <button className="btn1">
                     <img src="https://img1.imgtp.com/2023/07/25/vyPpHmnZ.svg"  alt="tupian" />
                  </button>
                  <div className="tip">
                     13751557136
                  </div>
                </Listbox.Option>
                <Listbox.Option value="UniqueValue-3">
                  <button className="btn1" >
                     <img src="https://img1.imgtp.com/2023/07/25/rDWNcY0O.svg"  alt="tupian" />
                  </button>
                  <div className="tip">
                     小陈爱吃大鸡腿！
                  </div>
                </Listbox.Option>
                </Listbox>
      </div>    
        )
}