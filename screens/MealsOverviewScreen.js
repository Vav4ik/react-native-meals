import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  //can use useRoute hook to get to route object, especially in nested objects
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  //this is almost the same as useEffect, but it runs simultaniously
  //with component render (render waits a bit, I think) to make it visually nice, no jumps 
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    return <MealItem meal={itemData.item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
