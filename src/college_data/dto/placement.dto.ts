export class PlacementDto {
    id: number;
    college_id: number;
    year: number;
    highest_placement: number;
    average_placement: number;
    median_placement: number;
    placement_rate: number;
    placement_trend: string;  // This will be 'UP' or 'DOWN'
  }
  