import { twMerge } from "tailwind-merge";
import { Text, TextProps } from "./Text";

interface TextPropsWithOnlySize {
  size: TextProps["size"];
}

export interface MultiStepProps {
  currentStep: number;
  totalSteps: number;
  size: TextPropsWithOnlySize["size"];
}

export function MultiStep({
  currentStep = 1,
  totalSteps,
  size = "xs",
}: MultiStepProps) {
  return (
    <div>
      <Text size={size} className="text-gray-200">
        Step {currentStep} of {totalSteps}
      </Text>

      <div
        className="mt-1 grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={twMerge(
              "h-1 rounded-px bg-gray-600",
              currentStep >= step && "bg-gray-100",
            )}
          />
        ))}
      </div>
    </div>
  );
}
