import { Text, View } from "react-native";

const MealItem = ({ meal }) => {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

export default MealItem;
