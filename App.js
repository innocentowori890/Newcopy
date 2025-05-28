// App.js (Main Entry) import React from 'react'; import { NavigationContainer } from '@react-navigation/native'; import TabNavigator from './src/navigation/TabNavigator';

export default function App() { return ( <NavigationContainer> <TabNavigator /> </NavigationContainer> ); }

// src/navigation/TabNavigator.js import React from 'react'; import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; import MarketplaceNavigator from './MarketplaceNavigator'; import ServicesNavigator from './ServicesNavigator'; import InstitutionsNavigator from './InstitutionsNavigator'; import RentalsNavigator from './RentalsNavigator'; import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() { return ( <Tab.Navigator> <Tab.Screen name="Marketplace" component={MarketplaceNavigator} /> <Tab.Screen name="Services" component={ServicesNavigator} /> <Tab.Screen name="Institutions" component={InstitutionsNavigator} /> <Tab.Screen name="Rentals" component={RentalsNavigator} /> <Tab.Screen name="Profile" component={ProfileScreen} /> </Tab.Navigator> ); }

// Sample of src/navigation/MarketplaceNavigator.js import React from 'react'; import { createStackNavigator } from '@react-navigation/stack'; import FoodScreen from '../screens/Marketplace/FoodScreen'; import ElectronicsScreen from '../screens/Marketplace/ElectronicsScreen';

const Stack = createStackNavigator();

export default function MarketplaceNavigator() { return ( <Stack.Navigator> <Stack.Screen name="Food" component={FoodScreen} /> <Stack.Screen name="Electronics" component={ElectronicsScreen} /> </Stack.Navigator> ); }

// Sample screen: src/screens/Marketplace/FoodScreen.js import React from 'react'; import { View, Text } from 'react-native';

export default function FoodScreen() { return ( <View> <Text>Food Listings Here</Text> </View> ); }

// ProfileScreen.js import React from 'react'; import { View, Text } from 'react-native';

export default function ProfileScreen() { return ( <View> <Text>User Profile</Text> </View> ); }

