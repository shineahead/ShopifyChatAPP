import {
        LegacyCard,
        ResourceList,
        Avatar,
        ResourceItem,
        Text,
      } from '@shopify/polaris';
      import React from 'react';
      
 export  function List() {
        return (
                <div>
                 
                <ResourceList
                  resourceName={{singular: 'customer', plural: 'customers'}}
                  items={[
                    { 
                      id: '100',
                      url: '#',
                      name: 'Hai Gan',
                      location: 'Decatur, China',
                    },
                    {
                      id: '200',
                      url: '#',
                      name: 'Qiqi Chen',
                      location: 'Los Angeles, China',
                    },
                  ]}
                  renderItem={(item) => {
                    const {id, url, name, location} = item;
                    const media = <Avatar customer source="https://img1.imgtp.com/2023/07/25/46cENTUO.jpeg" size="medium" name={name} />;
  
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
        );
      }