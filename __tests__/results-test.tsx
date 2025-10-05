import Results from "@/app/results";
import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { checkForText } from "@/test-utils";

it(`contains ${YOUR_CUSTOMIZED_PLANTING_LIST} text`, () => {
  checkForText(YOUR_CUSTOMIZED_PLANTING_LIST, Results());
});
