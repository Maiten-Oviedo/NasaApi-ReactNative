import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { RootStackParams } from '../types'
import Home from '../views/Home'
import Detail from '../views/Detail'

const Stack = createNativeStackNavigator<RootStackParams>()

const routeScreenDefaultOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
