import { DEER_RESISTANT, YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { SoilMoisture, SunLevel } from "@/types";
import { useContext } from "react";
import { Text, View } from "react-native";

const Results = () => {
  const userSelections = useContext(StepperContext);
  const customPlantList = greatLakesPlantList.filter((plant) => {
    const { soilMoisture, sunLevel, deerThreat } = userSelections;

    if (!matchesSelections(soilMoisture, plant.soil)) return false;
    if (!matchesSelections(sunLevel, plant.sun)) return false;
    if (deerThreat) {
      if (
        !plant.additionalDetails ||
        !plant.additionalDetails?.includes(DEER_RESISTANT)
      )
        return false;
    }
    return true;
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

const matchesSelections = <T extends SoilMoisture | SunLevel>(
  categorySelections: T[],
  plantAttributes: T[],
) => {
  for (const attribute of plantAttributes) {
    if (categorySelections.includes(attribute)) {
      return true;
    }
  }
  return false;
};
