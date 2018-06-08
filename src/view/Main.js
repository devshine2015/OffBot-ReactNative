import React, { Component } from 'react';
import {
  StyleSheet, Image
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right, Left, Body, View, Card, CardItem } from 'native-base';
import logoimage from '../images/logo.png';
export default class Main extends Component<{}> {
  static navigationOptions = { header: null }
  render() {
    return (
      <Container style={styles.container}>

        <Grid>
          <Row style={{ height: 200 }}>

            <Content >
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image style={{ height: 120, flex: 1 }} source={logoimage} />
                </CardItem>
                <CardItem>
                  <Left>
                    <Thumbnail source={logoimage} />
                    <Body>
                      <Text>Title</Text>
                      <Text note>Subtitle</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text>$20</Text>
                    <Text note>January 20,2018</Text>
                  </Right>
                </CardItem>
              </Card>


            </Content>

          </Row>
          <Row>
            <Content>
              <Text>Descripiton</Text>
              <Text>An exquisite design, featuring zigzag pattern as the main focal point of this creative business card template. The combination of black, white and a touch of bright yellow truly brings out the best of this design.

            </Text>
              <Text>Detials</Text>
              <Text>Let everyone know who you are and what you do with this modern and striking business card template aimed at creative professionals. It comes as a 300 DPI CMYK PSD, layered and fully editable and customisable so that you can add your own creative touches. Like a bee, the black and yellow colour scheme is sure to catch potential clients' eyes.</Text>
            </Content>
          </Row>
          <Row style={{ height: 60 }}>

            <Content><Button block style={styles.instructions}><Text>Get Offer</Text></Button></Content>
          </Row>
        </Grid>
      </Container>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 20,

  },
  form: {
    marginTop: 150,
    alignItems: 'center',
  },
  instructions: {
    marginBottom: 20,

  },
  signup: {
    marginTop: 50,

  },
});