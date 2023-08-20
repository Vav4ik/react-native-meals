import React from "react";
import { FlatList, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTyle from "../components/CategoryGridTyle";

const renderCategoryItem = (itemData) => (
  <CategoryGridTyle title={itemData.item.title} color={itemData.item.color} />
);

const CategoriesScreen = () => {
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
