import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'

export const MainList = (props) => {
  return (
    <List
      dataArray={props.data}
      renderRow={(item) => {
        return (
          <ListItem>
            <Text>{item.title}</Text>
          </ListItem>
        )
      }}>
    </List>
  )
}
