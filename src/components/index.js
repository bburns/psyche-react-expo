import React, { Component } from "react"
import { Text } from "react-native"
import styles from "../styles"

class PsycheText extends Component {
  render() {
    return <Text style={styles.text}>{this.props.children}</Text>
  }
}

class PsycheHeaderText extends Component {
  render() {
    return (
      <PsycheText>
        <Text style={styles.headerText}>{this.props.children}</Text>
      </PsycheText>
    )
  }
}

export { PsycheText, PsycheHeaderText }
