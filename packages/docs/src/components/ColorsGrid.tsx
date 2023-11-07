import { colors } from "@polly-ui/tokens";
import { getContrast } from "polished";

export function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => (
    <div key={name} style={{ backgroundColor: color, padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getContrast(color, "#fff") < 3.5 ? "#000" : "#fff",
        }}
      >
        <strong>${name}</strong>
        <span>{color}</span>
      </div>
    </div>
  ));
}
