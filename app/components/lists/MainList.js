import React, { Component } from 'react'
import { View, Linking, AlertIOS } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export const MainList = (props) => {
  return (
    <List
      dataArray={props.data}
      renderRow={(item) => {
        return (
          <ListItem
            onPress={() => {
              if (item.inputTitle) {
                AlertIOS.prompt(
                  `Enter a ${item.inputTitle}`,
                  null,
                  text => {
                    const newUrl = `${item.url}${text}`
                    Linking.openURL(newUrl).catch(error => alert('The application is not installed'))
                  },
                  'plain-text',
                  '',
                  'number-pad'
                )
              } else {
                Linking.openURL(item.url).catch(error => alert('The application is not installed'))
              }
            }}
          >
            <View
            style={{
              flexDirection: 'column',
              flex: 1,
              height: 30,
            }}
            >
            <Text
              style={{
                fontSize: 15,
                alignSelf: 'flex-start',
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                paddingTop: 4,
                alignSelf: 'flex-start',
              }}
            >
              {item.url}
            </Text>
            </View>
          </ListItem>
        )
      }}>
    </List>
  )
}
