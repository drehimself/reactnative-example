import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AnotherScreen from './AnotherScreen';

export default createStackNavigator(
  {
    Home: HomeScreen,
    Another: AnotherScreen,
  },
  {
    initialRouteName: 'Home',
  }

);
