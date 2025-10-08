import {
  DEER_RESISTANT,
  SHRUB,
  TREE,
  YOUR_CUSTOMIZED_PLANTING_LIST,
} from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { Plant, SoilMoisture, SunLevel } from "@/types";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";

const Results = () => {
  const { selections } = useContext(StepperContext);
  const { soilMoisture, sunLevel, deerThreat, shrubsAndTrees } = selections;

  const customPlantList = greatLakesPlantList.filter((plant) => {
    return (
      filterBySoil(plant, soilMoisture) &&
      filterBySun(plant, sunLevel) &&
      filterByDeer(plant, deerThreat) &&
      filterByForm(plant, shrubsAndTrees)
    );
  });

  return (
    <View className="pb-20">
      <Text>{YOUR_CUSTOMIZED_PLANTING_LIST}</Text>
      <FlatList
        data={customPlantList}
        keyExtractor={(item) => item.scientificName}
        renderItem={({ item }) => <Text>{item.commonName}</Text>}
      />
    </View>
  );
};

export default Results;

const filterBySoil = (plant: Plant, selections: SoilMoisture[]) =>
  matchesSelections(selections, plant.soil);
const filterBySun = (plant: Plant, selections: SunLevel[]) =>
  matchesSelections(selections, plant.sun);
const filterByDeer = (plant: Plant, deerThreat: boolean) =>
  !deerThreat || plant.additionalDetails?.includes(DEER_RESISTANT);
const filterByForm = (plant: Plant, shrubsAndTrees: boolean) =>
  shrubsAndTrees || (!plant.form.includes(SHRUB) && !plant.form.includes(TREE));

const matchesSelections = <T extends SoilMoisture | SunLevel>(
  categorySelections: T[],
  plantAttributes: T[],
): boolean => {
  const normalizedCategorySelections = categorySelections.map((selection) =>
    selection.toLowerCase(),
  );
  return plantAttributes.some((attr) =>
    normalizedCategorySelections.includes(attr),
  );
};
