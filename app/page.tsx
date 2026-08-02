import { getInvitationByToken } from "@/lib/services/invitation";

export default async function Home() {
  const invitation = await getInvitationByToken("7QF4KX9MPL2A");

  console.log(invitation);

  return (
    <main className="p-10">
      <pre>{JSON.stringify(invitation, null, 2)}</pre>
    </main>
  );
}
