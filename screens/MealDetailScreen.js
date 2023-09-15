import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
// import { FavouritesContext } from "../store/context/favourits.context";
import MealDetails from "../components/MealsList/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavourite, removeFavourite } from "../store/redux/favourites.slice";

const MealDetailScreen = ({ navigation, route }) => {
  // const FavouritesCtx = useContext(FavouritesContext);

  const dispatch = useDispatch();

  const favouriteMealIds = useSelector((state) => state.favourites.ids);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavourite = FavouritesCtx.ids.includes(mealId);
  const mealIsFavourite = favouriteMealIds.includes(mealId);

  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      // FavouritesCtx.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // FavouritesCtx.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavouriteStatusHandler}
        />
      ),
    });
  }, [changeFavouriteStatusHandler, navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
