import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { useContext } from "react";
import { Text, View } from "react-native";

const Results = () => {
  const userSelections = useContext(StepperContext);
  const customPlantList = greatLakesPlantList.filter((plant) => {
    for (const moistureLevel of plant.soil) {
      if (userSelections.soilMoisture.includes(moistureLevel)) {
        return true;
      }
    }
  });

  return (
    <View>
      <Text>{YOUR_CUSTOMIZED_PLANTING_LIST}</Text>
      {customPlantList.map((plant) => {
        return <Text key={plant.scientificName}>{plant.commonName}</Text>;
      })}
    </View>
  );
};

export default Results;
