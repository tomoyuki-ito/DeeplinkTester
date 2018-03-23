import React, { Component } from 'react'
import { Container, Header, Body, Title } from 'native-base'
import { MainList } from '../lists/MainList'
import { listdata } from '../../listdata/mangajam'

export default class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Deeplink Tester</Title>
          </Body>
        </Header>
        <MainList
          data={listdata}
        />
      </Container>
    )
  }
}
