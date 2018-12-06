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
  ActivityIndicator,
} from 'react-native';

export default class HomeScreen extends React.Component {
  state = {
    loading: true,
    posts: [],
    message: 'I am state',
    countries: [
      { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
      { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
      { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
      { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
      { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
      { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
      { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
      { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
      { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
      { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
      { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
      { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
      { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
      { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
      { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
      { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
      { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
    ],
  }

  handleButton = () => {
    this.setState({
      message: 'Button was clicked'
    });
  }

  handleListTap = item => {
    console.log(item.name);
    this.props.navigation.navigate('Another', {
      title: item.data.title,
      imageSrc: item.data.preview.images[0].source.url
    });
  }

  componentWillMount() {
    fetch('https://reddit.com/r/aww.json?raw_json=1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          posts: data.data.children
        });
      });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Opennn up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.message}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <TextInput
          style={{ height: 40, width: 200, borderWidth: 1, borderColor: 'lightgray' }}
          value={this.state.message}
          onChangeText={(text) => this.setState({ message: text })}
        />
        <Button
          onPress={this.handleButton}
          title="My Button"
          color="#841584"
        />
        {this.state.loading &&
        <ActivityIndicator size="large" color="#0000ff" />
        }

        <FlatList
          ItemSeparatorComponent={() =>
            <View
              style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }}
            />
          }
          data={this.state.posts}
          keyExtractor={item => item.data.id}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
              onPress={() => this.handleListTap(item)}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: item.data.thumbnail }}
              />
              <Text style={{ padding: 10 }}>{item.data.title}</Text>
            </TouchableOpacity>
          }
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
