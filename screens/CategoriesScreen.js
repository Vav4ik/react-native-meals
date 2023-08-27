import React from "react";
import { FlatList, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTyle from "../components/CategoryGridTyle";

const CategoriesScreen = ({ navigation }) => {
  //can use useNavigation hook to get to navigation object, especially in nested objects
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTyle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      key={2}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
