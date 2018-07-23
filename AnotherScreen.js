import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class AnotherScreen extends React.Component {
  state = {
    message: 'I am state',
  }

  handleListTap = item => {
    console.log(item.name);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('title', 'no title')}</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: this.props.navigation.getParam('imageSrc', '') }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
