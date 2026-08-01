import { Guest } from "./guest";

export interface Invitation {
  id: string;
  token: string;
  familyName: string;
  reservedSeats: number;
  guests: Guest[];
}
