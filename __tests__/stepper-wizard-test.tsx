import SoilMoisturePage from "@/app/(modal)";
import DeerPage from "@/app/(modal)/deer-page";
import SunPage from "@/app/(modal)/sun-page";
import {
  DEER_QUESTION,
  NO,
  SOIL_MOISTURE_QUESTION,
  SUN_QUESTION,
  YES,
} from "@/constants";
import { checkForText } from "@/test-utils";
import { render, screen } from "@testing-library/react-native";

describe.each([
  ["Soil Moisture Page", SoilMoisturePage, SOIL_MOISTURE_QUESTION],
  ["Sun Page", SunPage, SUN_QUESTION],
  ["Deer Page", DeerPage, DEER_QUESTION],
])("%s has required elements", (title, component, text) => {
  it("has correct text", () => {
    checkForText(text, component());
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
