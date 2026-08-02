import { notFound } from "next/navigation";
import { getInvitationByToken } from "@/lib/services/invitation";
import { getGuestsByInvitationId } from "@/lib/services/guest";
import InvitationView from "./InvitationView";

interface PageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { token } = await params;

  const invitation = await getInvitationByToken(token);

  if (!invitation) {
    notFound();
  }

  const guests = await getGuestsByInvitationId(invitation.id);
  return <InvitationView invitation={invitation} guests={guests} />;
}
