import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { useContext } from "react";
import { Text, View } from "react-native";

const Results = () => {
  const userSelections = useContext(StepperContext);
  const customPlantList = greatLakesPlantList.filter((plant) => {
    let hasSoilValue = false;
    for (const moistureLevel of plant.soil) {
      if (userSelections.soilMoisture.includes(moistureLevel)) {
        hasSoilValue = true;
        break;
      }
    }
    if (!hasSoilValue) return false;

    for (const sunLevel of plant.sun) {
      if (userSelections.sunLevel.includes(sunLevel)) {
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
