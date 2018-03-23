import React, { Component } from 'react'
import { Container, Header, Body, Title } from 'native-base'
import { MainList } from '../lists/MainList'

const list = [
  {
    title: 'ホーム',
    url: 'mangajam://home',
  },
  {
    title: '連載',
    url: 'mangajam://serial',
  },
]

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
          data={list}
        />
      </Container>
    )
  }
}
