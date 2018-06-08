import React, { Component } from 'react';
import {
  StyleSheet, Image
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon, Right, Left, Body, View, Card, CardItem } from 'native-base';
import styles from '../styles/search';
export default class Search extends Component<{}> {
  static navigationOptions = { header: null }
  render() {
    return (
      <Container style={styles.container}>

      </Container>

    );
  }
}
