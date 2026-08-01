import RSVPInvitationInfo from "./RSVPInvitationInfo";
import RSVPGuests from "./RSVPGuests";
import RSVPMessage from "./RSVPMessage";
import RSVPButton from "./RSVPButton";

export default function RSVPForm() {
  return (
    <form className="space-y-10">
      <RSVPInvitationInfo />

      <RSVPGuests />

      <RSVPMessage />

      <RSVPButton>Confirm Attendance</RSVPButton>
    </form>
  );
}
