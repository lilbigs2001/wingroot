import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { PlantingsContext } from "@/context/PlantingsContext";
import { useContext } from "react";
import { Text, View } from "react-native";

const Results = () => {
  const plantsList = useContext(PlantingsContext);

  return (
    <View>
      <Text>{YOUR_CUSTOMIZED_PLANTING_LIST}</Text>
      {plantsList.map((plant) => {
        return <Text key={plant.scientificName}>{plant.commonName}</Text>;
      })}
    </View>
  );
};

export default Results;
