import { supabase } from "../supabase";
import type { Invitation } from "@/types/invitation";

export async function getInvitationByToken(
  token: string
): Promise<Invitation | null> {
  const { data, error } = await supabase
    .from("invitations")
    .select("*")
    .eq("token", token)
    .maybeSingle();

  if (error) {
    console.error("Failed to fetch invitation:", error);
    return null;
  }

  return data;
}
