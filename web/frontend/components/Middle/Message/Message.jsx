import {
        Listbox,
        Text,
        ResourceList,
        ResourceItem,
      } from "@shopify/polaris";
import {Avatar} from '@shopify/polaris';
export function Message() {
        return (
        <div
                  style={{
                    background: 'var(--p-color-bg-primary-subdued)',
                    height: '530px',
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
                                message: '吃啥饭a？',
                              },
                            ]}
                            renderItem={(item) => {
                              const {id, url, name,time, message} = item;
                              const media = <Avatar source="https://img1.imgtp.com/2023/07/25/PJTVigP4.jpeg" />;

                              return (
                                <ResourceItem
                                  id={id}
                                  url={url}
                                  media={media}
                                  accessibilityLabel={`View details for ${name}`}
                                > 
                                <div style={{width:"450px",}}>
                                <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {name}
                                    {time}
                                  </Text>
                                  <div>{message}</div>
                                </div>
                                  
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
                                  message: '了一个鸡腿！',
                                },
                              ]}
                              renderItem={(item) => {
                                const {id, url, name,time, message} = item;
                                const media = <Avatar source="https://img1.imgtp.com/2023/07/25/46cENTUO.jpeg" />;

                                return (
                                  <ResourceItem
                                    id={id}
                                    url={url}
                                    media={media}
                                    accessibilityLabel={`View details for ${name}`}
                                  > 
                                    <div style={{width:"527px",}}>
                                    <Text variant="bodyMd" fontWeight="bold" as="h3">
                                      {name}
                                      {time}
                                    </Text>
                                    <div>{message}</div>
                                    </div>
                                    
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
                              const media = <Avatar source="https://img1.imgtp.com/2023/07/25/PJTVigP4.jpeg" />;

                              return (
                                <ResourceItem
                                  id={id}
                                  url={url}
                                  media={media}
                                  accessibilityLabel={`View details for ${name}`}
                                >
                                 <div style={{width:"527px",}}>
                                 <Text variant="bodyMd" fontWeight="bold" as="h3">
                                    {name}
                                    {time}
                                  </Text>
                                  <div width="100px">{message}</div>
                                 </div>
                                </ResourceItem>
                              );
                            }}
                          />
                        </Listbox.Option>
                      </Listbox>
                  </div> 
        )
}