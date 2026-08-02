import { supabase } from "../supabase";
import type { Guest } from "@/types/guest";

export async function getGuestsByInvitationId(
  invitationId: string
): Promise<Guest[]> {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invitation_id", invitationId)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch guests:", error);
    return [];
  }

  return data ?? [];
}
