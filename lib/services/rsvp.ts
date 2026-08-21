import { supabase } from "../supabase";

export interface GuestResponse {
  guest_id: string;
  response: "accepted" | "declined";
  responded_at: string;
}

interface SubmitRSVPParams {
  guests: string[];
  selectedGuestIds: string[];
}

export async function getRSVPResponses(
  guestIds: string[]
): Promise<GuestResponse[]> {
  if (guestIds.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from("guest_responses")
    .select("guest_id, response, responded_at")
    .in("guest_id", guestIds);

  if (error) {
    console.error("Failed to fetch RSVP responses:", error);
    return [];
  }

  return data ?? [];
}

export async function submitRSVP({
  guests,
  selectedGuestIds,
}: SubmitRSVPParams): Promise<boolean> {
  const respondedAt = new Date().toISOString();

  const responses = guests.map((guestId) => ({
    guest_id: guestId,
    response: selectedGuestIds.includes(guestId) ? "accepted" : "declined",
    responded_at: respondedAt,
  }));

  console.log("Submitting RSVP:", responses);

  const { error } = await supabase.from("guest_responses").upsert(responses, {
    onConflict: "guest_id",
  });

  if (error) {
    console.error("Failed to submit RSVP:", error);
    return false;
  }

  console.log("RSVP submitted successfully.");

  return true;
}
