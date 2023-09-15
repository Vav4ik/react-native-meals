// import { useContext } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favourits.context";
import MealsList from "../components/MealsList/MealsList";

const FavouritesScreen = () => {
  // const FavouritesCtx = useContext(FavouritesContext);
  // const favouriteMealIds = FavouritesCtx.ids;

  const favouriteMealIds = useSelector((state) => state.favourites.ids);

  const favouriteMeals = MEALS.filter((meal) => favouriteMealIds.includes(meal.id));

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FavouritesScreen;
