export interface Logo {
  id: number;
  width: number;
  height: number;
  channels: number;
  format: string;
  url: string;
  ratings: Rate[];
  rated?: boolean;
}

export interface Rate {
  logo_id: number;
  colors_rate: number;
  sharpness_rate: number;
  shape_rate: number;
}
