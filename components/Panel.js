import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Panel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true
    };
  }

  render() {
    const { open } = this.state;
    return (
      <View style={[styles.panel, ...(!open ? [{ display: 'none' }] : [])]}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to .... here !
          </Text>
        </View>
        <VrButton onClick={() => this.setState({ open: false })} style={styles.closeButton}>
          <Text style={styles.close}>Close X</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    // padding: 20,
    // backgroundColor: '#000000',
    // borderColor: '#639dda',
    // borderWidth: 2,
    padding: 25,
    backgroundColor: 'black',
    borderColor: 'green',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 20
  },
  close: {
    fontSize: 40,
    color: 'black'
  }
});