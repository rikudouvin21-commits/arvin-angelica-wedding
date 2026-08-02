export interface Invitation {
  id: string;
  token: string;
  family_name: string;
  reserved_seats: number;
  status: "pending" | "confirmed" | "declined";
  responded_at: string | null;
  rsvp_deadline: string;
  is_locked: boolean;
  created_at: string;
  updated_at: string;
}
