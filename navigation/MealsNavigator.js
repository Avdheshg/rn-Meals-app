import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

// const MealsNavigator = createStackNavigator({
//     Categories: CategoriesScreen,
//     CategoryMeals: {
//         screen: CategoryMealsScreen
//     },
//     MealDetail: MealDetailScreen    
// })

// const MealsNavigator = (props) => {
const MealsNavigator = ({route, navigation}) => {
  // console.log("Meals Navigator: ", route)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Categories Screen",
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            headerTintColor: "white",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Category Meals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            // title: route.params.name,
            title: "Category Meals Screen",
            headerStyle: {
              backgroundColor: Colors.primaryColor
            },
            headerTintColor: "white"
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="Meal Detail"
          component={MealDetailScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// bottom tab navigator
const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default MealsNavigator;
