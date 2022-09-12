import { Stepper } from "react-form-stepper";

const CustomStepper = (steps: [], active: number = 1) => (
  <Stepper
    steps={[{ label: "" }, { label: "" }, { label: "" }]}
    activeStep={1}
  />
);

export default CustomStepper;
