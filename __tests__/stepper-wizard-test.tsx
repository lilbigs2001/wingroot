import SoilMoisturePage from "@/app/(stepper-wizard)";
import DeerPage from "@/app/(stepper-wizard)/deer-page";
import SunPage from "@/app/(stepper-wizard)/sun-page";
import TreesAndShrubsPage from "@/app/(stepper-wizard)/trees-and-shrubs-page";
import {
  DEER_QUESTION,
  NO,
  SOIL_MOISTURE_QUESTION,
  SUN_QUESTION,
  TREES_AND_SHRUBS_QUESTION,
  YES,
} from "@/constants";
import { render, screen } from "@testing-library/react-native";

describe.each([
  ["Soil Moisture Page", SoilMoisturePage, SOIL_MOISTURE_QUESTION],
  ["Sun Page", SunPage, SUN_QUESTION],
  ["Deer Page", DeerPage, DEER_QUESTION],
  ["Trees and Shrubs Page", TreesAndShrubsPage, TREES_AND_SHRUBS_QUESTION],
])("%s has required elements", (_, component, text) => {
  it("has correct text", () => {
    render(component());
    expect(screen.getByRole("text", { name: text })).toBeOnTheScreen();
  });

  it(`displays ${YES} button`, () => {
    render(component());
    expect(screen.getByRole("button", { name: YES })).toBeOnTheScreen();
  });

  it(`displays ${NO} button`, () => {
    render(component());
    expect(screen.getByRole("button", { name: NO })).toBeOnTheScreen();
  });
});
