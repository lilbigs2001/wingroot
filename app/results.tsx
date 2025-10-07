import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { Text, View } from "react-native";

const Results = () => {
  return (
    <View>
      <Text>{YOUR_CUSTOMIZED_PLANTING_LIST}</Text>
      {greatLakesPlantList.map((plant) => {
        return <Text key={plant.scientificName}>{plant.commonName}</Text>;
      })}
    </View>
  );
};

export default Results;
