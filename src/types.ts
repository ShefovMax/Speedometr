type ChartType = "SpeedTwoWays" | "AnotherType";

export interface SpeedometrProps {
  config: {
    id: number;
    type: ChartType;
    title: string;
    data: {
      label: string;
      score: number;
    }[];
  };
}