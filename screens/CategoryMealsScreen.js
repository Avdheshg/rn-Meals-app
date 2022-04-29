import { View, Text, StyleSheet, FlatList, Button } from "react-native";

// reading the data
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// const CategoryMealScreen = (props, { route, navigation }) => { 
const CategoryMealScreen = ({ route, navigation }) => {
  console.log("route: ", route);

  const { categoryId } = route.params;
  const { categoryName } = route.params;
  // console.log("categoryName: ", categoryName);

  // const selectedCategory = CATEGORIES.find(cat => {
  //   // console.log(cat.id === catId)
  //   return cat.id === categoryId
  // })

  // for displaying the details in each card
  const renderMealItem = (itemData) => {
    // console.log("inside renderMealItem")
    // console.log("itemData: ", itemData)
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectedMeal={() => {
          navigation.navigate("Meal Detail", { mealId: itemData.item.id });
        }}
      />
    );
  };

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );
  // console.log("displayedMeals: ", displayedMeals)

  navigation.setOptions({ title: categoryName });

  // console.log("selectedCategory: ", selectedCategory)
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

// console.log("Here")
// CategoryMealScreen.navigationOptions = navigationData => {
//   console.log("navigationData: ", navigationData);
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
