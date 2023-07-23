import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Button,
  Listbox,
  Text,
  LegacyStack,
  Autocomplete, 
  Icon,
  ResourceList,
  ResourceItem,
  TextField,

} from "@shopify/polaris";

import {CirclePlusMinor} from '@shopify/polaris-icons';
import {Avatar} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';
import { TitleBar } from "@shopify/app-bridge-react";
import {useState, useCallback, useMemo} from 'react';


export default function HomePage() {
        const deselectedOptions = useMemo(
          () => [
            {value: 'rustic', label: 'Rustic'},
            {value: 'antique', label: 'Antique'},
            {value: 'vinyl', label: 'Vinyl'},
            {value: 'vintage', label: 'Vintage'},
            {value: 'refurbished', label: 'Refurbished'},
          ],
          [],
        );
        const [selectedOptions, setSelectedOptions] = useState([]);
        const [inputValue, setInputValue] = useState('');
        const [options, setOptions] = useState(deselectedOptions);

        const updateText = useCallback(
          (value) => {
            setInputValue(value);

            if (value === '') {
              setOptions(deselectedOptions);
              return;
            }

            const filterRegex = new RegExp(value, 'i');
            const resultOptions = deselectedOptions.filter((option) =>
              option.label.match(filterRegex),
            );
            setOptions(resultOptions);
          },
          [deselectedOptions],
        );

        const updateSelection = useCallback(
          (selected) => {
            const selectedValue = selected.map((selectedItem) => {
              const matchedOption = options.find((option) => {
                return option.value.match(selectedItem);
              });
              return matchedOption && matchedOption.label;
            });

            setSelectedOptions(selected);
            setInputValue(selectedValue[0] || '');
          },
          [options],
        );

        const textField = (
          <Autocomplete.TextField
            onChange={updateText}
           
            value={inputValue}
            prefix={<Icon source={SearchMinor} color="base" />}
            placeholder="Search"
            autoComplete="off"
          />
        );
        // 聊天框
        const [value, setValue] = useState('Jaded Pixel');

        const handleChange = useCallback(
          (newValue) => setValue(newValue),
          [],
        );
  return (
       <div
       style={{
        padding: "0px",
      }}>
        {/* 最左侧页面 */}
          <div 
          style={{
            background: 'var(--p-color-bg-app)',
            float: "left",
            height: "672px",
            width: "25%", 
            padding: "0px",
          }}
          >
            <div
            style={{
              background: 'var(--p-color-bg)',
              height: "50px",
            }}>
                  {/* 左侧图标 */}
                  <div style={{padding: '3px',float: "left"}}>
                     <img src="./Image/img2.png" alt="image" margin="3px"/>
                  </div>
                  {/* 左侧导航栏文字 */}
                  <div style={{padding: '14px 3px',float: "left", height: "50px",width: '140px',}}>
                    <Text variant="headingLg" as="h5">
                    Chat Interface
                    </Text>
                  </div>
                  {/* 导航栏按钮 */}
                  <div style={{padding: '8px 3px',float: "left", height: "50px",width: '120px',}}>
                  <Button>Add product</Button>
                  </div>
            </div>
            {/* 搜索框 */}
                  <div >
                    <Autocomplete
                      options={options}
                      selected={selectedOptions}
                      onSelect={updateSelection}
                      textField={textField}
                    />
                  </div>
                {/* 列表信息 */}
                  <div
                  style={{margin: '0px',background: 'var(--p-color-bg)',}}>
                     
                  <ResourceList
                    resourceName={{singular: 'customer', plural: 'customers'}}
                    items={[
                      { 
                        id: '100',
                        url: '#',
                        name: 'Mae Jemison',
                        location: 'Decatur, USA',
                      },
                      {
                        id: '200',
                        url: '#',
                        name: 'Ellen Ochoa',
                        location: 'Los Angeles, USA',
                      },
                    ]}
                    renderItem={(item) => {
                      const {id, url, name, location} = item;
                      const media = <Avatar customer size="medium" name={name} />;

                      return (
                        <ResourceItem
                          id={id}
                          url={url}
                          media={media}
                          accessibilityLabel={`View details for ${name}`}
                        >
                          <Text variant="bodyMd" fontWeight="bold" as="h3">
                            {name}
                          </Text>
                          <div>{location}</div>
                        </ResourceItem>
                      );
                    }}
                  />
                  </div>
          </div>
          {/* 中间页面 */}
          <div
          style={{
            background: 'var(--p-color-bg-primary-subdued)',
            float: "left",
            height: "672px",
            width: "50%", 
            padding: "0px",
          }}
          >
                <div
                style={{
                  background: 'var(--p-color-bg-primary-subdued)',
                  height: "75%",
                }}
                >
                   {/* 导航栏 */}
                   <div
                        style={{
                          background: 'var(--p-color-bg-strong)',
                          height: "10%",
                        }}>
                       {/* 头像 */}
                          <div
                          style={{
                            float: 'left',
                            padding: "5px 3px",
                            width: "20%",
                          }}>
                              <Avatar customer size="medium" name={name} />
                          </div>
                          {/* 用户名 */}
                          <div
                          style={{
                            float: 'left',
                            padding: "15px 0px 0px 90px",
                            width: "60%",
                          }}>
                             <Text variant="headingLg" as="h5">
                             Mae Jemison
                              </Text>
                          </div>
                          {/* 刷新 */}
                          <div
                          style={{
                            float: 'right',
                           marginRight: "4px",
                           marginTop: "3px",
                            height: "50%",
                            width: "5%",
                          }}>
                              <Button  size="slim"  fullWidth="1" background= 'var(--p-color-bg-info-subdued-active)'>
                                <img src="./Image/img3.png" alt="fresh" />
                              </Button>
                          </div>
                   </div>
                    <div
                    style={{
                      height: "8%",
                      float:"right",
                    }}>
                      <Button>
                        close
                      </Button>
                    </div>
                  {/* 聊天框     */}
                  <div
                  style={{
                    background: 'var(--p-color-bg-primary-subdued)',
                    height: "90%",
                  }}>
                       <Listbox accessibilityLabel="Basic Listbox example">
                        <Listbox.Option value="UniqueValue-1">
                        <ResourceList
                            resourceName={{singular: 'customer', plural: 'customers'}}
                            items={[
                              { 
                                id: '100',
                                url: '#',
                                name: 'Gexin An',
                                time: "  9:22PM",
                                message: '吃饭没？',
                              },
                            ]}
                            renderItem={(item) => {
                              const {id, url, name,time, message} = item;
                              const media = <Avatar customer size="medium" name={name} />;

                              return (
                                <ResourceItem
                                  id={id}
                                  url={url}
                                  media={media}
                                  accessibilityLabel={`View details for ${name}`}
                                >
                                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {name}
                                    {time}
                                  </Text>
                                  <div>{message}</div>
                                </ResourceItem>
                              );
                            }}
                          />
                        </Listbox.Option>
                        <Listbox.Option value="UniqueValue-2">
                          <ResourceList
                              resourceName={{singular: 'customer', plural: 'customers'}}
                              items={[
                                { 
                                  id: '100',
                                  url: '#',
                                  name: 'Hai Gan',
                                  time: "  9:23PM",
                                  message: '吃了！',
                                },
                              ]}
                              renderItem={(item) => {
                                const {id, url, name,time, message} = item;
                                const media = <Avatar customer size="medium" name={name} />;

                                return (
                                  <ResourceItem
                                    id={id}
                                    url={url}
                                    media={media}
                                    accessibilityLabel={`View details for ${name}`}
                                  >
                                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                                      {name}
                                      {time}
                                    </Text>
                                    <div>{message}</div>
                                  </ResourceItem>
                                );
                              }}
                            />
                        </Listbox.Option>
                        <Listbox.Option value="UniqueValue-3">
                        <ResourceList
                            resourceName={{singular: 'customer', plural: 'customers'}}
                            items={[
                              { 
                                id: '100',
                                url: '#',
                                name: 'Gexin An',
                                time: "  9:24PM",
                                message: '那我就不担心啦！',
                              },
                            ]}
                            renderItem={(item) => {
                              const {id, url, name,time, message} = item;
                              const media = <Avatar customer size="medium" name={name} />;

                              return (
                                <ResourceItem
                                  id={id}
                                  url={url}
                                  media={media}
                                  accessibilityLabel={`View details for ${name}`}
                                >
                                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {name}
                                    {time}
                                  </Text>
                                  <div>{message}</div>
                                </ResourceItem>
                              );
                            }}
                          />
                        </Listbox.Option>
                      </Listbox>
                  </div>
                </div>
                {/* 聊天框 */}
                <div
                style={{
                  background: 'var(--p-color-bg-info-subdued-active)',
                  height: "25%",
                }}
                >
                    <div
                     style={{
                      background: 'var(--p-color-border-interactive-subdued)',
                      height: "65%",
                    }}>
                        {/* <TextField
                          fontWeight='weight'
                          value={value}
                          onChange={handleChange}
                          autoComplete="off"
                        /> */}
                        <textarea name="xioaming" id="12" cols="88" rows="8"></textarea>
                    </div>
                    <div
                     style={{
                      background: 'var(--p-color-bg-magic-strong)',
                      
                      height: "10%",
                     
                    }}
                    >
                    </div>
                    {/* 工具栏 */}
                    <div
                     style={{
                      background: 'var(--p-color-bg-info-subdued-hover)',
                      height: "25%",
                    }}>
                        <div
                        style={{
                          float: "left",
                          marginTop: "7px",
                         
                          width: "9%",
                        }}>
                         <img src="./Image/img6.png" alt="tupian" />
                        </div>
                        <div
                        style={{
                          float: "left",
                          marginTop: "6px",
                          width: "9%",
                        }}>
                        <img src="./Image/img5.png" alt="tupian" />
                        </div>
                        <div
                        style={{
                          float: "left",
                          marginTop: "6px",
                          width: "9%",
                        }}>
                          <img src="./Image/img4.png" alt="tupian" />
                        </div>
                        <div
                        style={{
                          float: "right",
                          marginTop: "6px",
                          paddingLeft: "10px",
                          width: "9%",
                        }}>
                          <img src="./Image/img8.png" alt="tupian" />
                        </div>
                        <div
                        style={{
                          float: "right",
                          marginTop: "6px",
                          marginLeft: "20px",
                          width: "9%",
                        }}> 
                          <img src="./Image/img7.png" alt="tupian" />
                        </div>
                    </div>
                </div>
          </div>
          {/* 最右侧页面 */}
          <div 
          style={{
            background: 'var(--p-color-bg-interactive-selected)',
            float: "left",
            height: "672px",
            width: "25%", 
            padding: "0px",
          }}
          >
            <div
            style={{
              background: 'var(--p-color-bg-info-subdued-hover)',
              height: "50px",
              paddingLeft:"100px",
              paddingTop:"15px",
            }}>
                    <Text variant="headingLg" as="h5">
                     Person info
                    </Text>
            </div>
            <div>
                          <Listbox accessibilityLabel="Basic Listbox example">
                            <Listbox.Option value="UniqueValue-1">
                               <div
                               style={{
                                margin:"5px 5px",
                               }}>
                               <img src="./Image/img9.png" Icon={CirclePlusMinor} alt="tupian" />
                               </div>
                              <div
                              style={{
                                fontSize:"xx-larger",
                                fontFamily:"monospace",
                                fontWeight:"700",
                                paddingTop:"10px",
                               
                              }}>
                               Mae Jemison
                              </div>
                            </Listbox.Option>
                            <Listbox.Option value="UniqueValue-2">
                            <div
                               style={{
                                margin:"5px 5px",
                               }}>
                               <img src="./Image/img10.png" Icon={CirclePlusMinor} alt="tupian" />
                               </div>
                              <div
                              style={{
                                fontSize:"xx-larger",
                                fontFamily:"monospace",
                                fontWeight:"700",
                                paddingTop:"10px",
                               
                              }}>
                               China
                              </div>
                            </Listbox.Option>
                            <Listbox.Option value="UniqueValue-3">
                            <div
                               style={{
                                margin:"5px 5px",
                               }}>
                               <img src="./Image/img11.png" Icon={CirclePlusMinor} alt="tupian" />
                               </div>
                              <div
                              style={{
                                fontSize:"xx-larger",
                                fontFamily:"monospace",
                                fontWeight:"700",
                                paddingTop:"10px",
                               
                              }}>
                               2753899798@qq.com
                              </div>
                            </Listbox.Option>
                            <Listbox.Option value="UniqueValue-3">
                            <div
                               style={{
                                margin:"5px 5px",
                               }}>
                               <img src="./Image/img12.png" Icon={CirclePlusMinor} alt="tupian" />
                               </div>
                              <div
                              style={{
                                fontSize:"xx-larger",
                                fontFamily:"monospace",
                                fontWeight:"700",
                                paddingTop:"10px",
                               
                              }}>
                               13751557136
                              </div>
                            </Listbox.Option>
                            <Listbox.Option value="UniqueValue-3">
                            <div
                               style={{
                                margin:"5px 5px",
                               }}>
                               <img src="./Image/img13.png" Icon={CirclePlusMinor} alt="tupian" />
                               </div>
                              <div
                              style={{
                                fontSize:"xx-larger",
                                fontFamily:"monospace",
                                fontWeight:"700",
                                paddingTop:"10px",
                               
                              }}>
                               小陈爱吃辣
                              </div>
                            </Listbox.Option>
                          </Listbox>
            </div>
          </div>
      </div>
   
  );
}
