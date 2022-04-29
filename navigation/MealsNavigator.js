import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const MealsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
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
            title: route.params.name,
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

export default MealsNavigator;
