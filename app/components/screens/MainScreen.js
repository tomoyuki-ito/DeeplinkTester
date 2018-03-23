import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Text, Title } from 'native-base'
import { MainList } from '../lists/MainList'
import { createListdata } from '../../listdata/mangajam'

export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      env: 0
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Deeplink Tester</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                if (this.state.env == 0) {
                  this.setState({...this.state, env: 1})
                } else {
                  this.setState({...this.state, env: 0})
                }
              }}
            >
              <Text>{this.state.env == 0 ? 'STG' : 'PRD'}</Text>
            </Button>
          </Right>
        </Header>
        <MainList
          data={createListdata(this.state.env)}
        />
      </Container>
    )
  }

}
