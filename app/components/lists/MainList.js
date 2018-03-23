import React, { Component } from 'react'
import { Linking } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export const MainList = (props) => {
  return (
    <List
      dataArray={props.data}
      renderRow={(item) => {
        return (
          <ListItem
            onPress={() => {
              Linking.openURL(item.url)
            }}
          >
            <Text>{item.title}</Text>
          </ListItem>
        )
      }}>
    </List>
  )
}
