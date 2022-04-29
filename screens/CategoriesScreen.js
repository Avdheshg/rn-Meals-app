import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Colors from "../constants/Colors";

// reading the data
import { CATEGORIES } from "../data/dummy-data";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

// const CategoriesScreen = (props,{ navigation }) => {
const CategoriesScreen = ({ navigation }) => {
  // Generally V define all functions outside of Component (to make our Components as lean as possible). But here V R defining it inside. Why?  11
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // props.navigation.navigate("Category Meals", {categoryId: itemData.item.id});
          navigation.navigate('Category Meals', {categoryId: itemData.item.id, categoryName: itemData.item.title});
          
        }}
      >
        <View>
          {/* {console.log(itemData.item.id)} */}
          <Text  style={styles.cardText} >{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // console.log(props);
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

// Defining styles for Header
CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
    headerStyle: {
        backgroundColor: "green"
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: "#368dff",
    color: "white",
    borderRadius: 10
  },
  cardText: {
    color: "#fff",
    fontWeight: "bold",
    padding: 10
  }
});

export default CategoriesScreen;
