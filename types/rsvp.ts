export type RSVP = {
  id: string;

  guest_id: string;

  response: "accepted" | "declined";

  responded_at: string;
};
