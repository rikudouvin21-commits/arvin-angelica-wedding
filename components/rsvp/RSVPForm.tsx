"use client";

import { useEffect, useState } from "react";

import RSVPGuests from "./RSVPGuests";
import RSVPMessage from "./RSVPMessage";
import RSVPButton from "./RSVPButton";

import { getRSVPResponses, submitRSVP } from "@/lib/services/rsvp";

import type { Invitation } from "@/types/invitation";
import type { Guest } from "@/types/guest";

interface RSVPFormProps {
  invitation: Invitation;
  guests: Guest[];
}

export default function RSVPForm({ invitation, guests }: RSVPFormProps) {
  const [selectedGuests, setSelectedGuests] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [isLoadingExistingRSVP, setIsLoadingExistingRSVP] = useState(true);

  const [hasExistingRSVP, setHasExistingRSVP] = useState(false);

  /*
   * ----------------------------------------------------
   * LOAD EXISTING RSVP
   * ----------------------------------------------------
   */

  useEffect(() => {
    async function loadExistingRSVP() {
      if (guests.length === 0) {
        setIsLoadingExistingRSVP(false);
        return;
      }

      const guestIds = guests.map((guest) => guest.id);

      const responses = await getRSVPResponses(guestIds);

      console.log("Existing RSVP responses:", responses);

      if (responses.length > 0) {
        setHasExistingRSVP(true);

        const acceptedGuestIds = responses
          .filter((response) => response.response === "accepted")
          .map((response) => response.guest_id);

        setSelectedGuests(acceptedGuestIds);
      }

      setIsLoadingExistingRSVP(false);
    }

    loadExistingRSVP();
  }, [guests]);

  /*
   * ----------------------------------------------------
   * TOGGLE GUEST
   * ----------------------------------------------------
   */

  function toggleGuest(guestId: string) {
    setSelectedGuests((current) =>
      current.includes(guestId)
        ? current.filter((id) => id !== guestId)
        : [...current, guestId]
    );
  }

  /*
   * ----------------------------------------------------
   * CONTINUE TO CONFIRMATION
   * ----------------------------------------------------
   */

  function handleContinue(event: React.FormEvent) {
    event.preventDefault();

    if (selectedGuests.length === 0) {
      return;
    }

    console.log("Selected guest IDs:", selectedGuests);

    setShowConfirmation(true);
  }

  /*
   * ----------------------------------------------------
   * CONFIRM RSVP
   * ----------------------------------------------------
   */

  async function handleConfirmRSVP() {
    setIsSubmitting(true);
    setSubmitError(null);

    const success = await submitRSVP({
      guests: guests.map((guest) => guest.id),
      selectedGuestIds: selectedGuests,
    });

    if (!success) {
      setSubmitError("We were unable to save your RSVP. Please try again.");

      setIsSubmitting(false);
      return;
    }

    setHasExistingRSVP(true);
    setSubmitted(true);
    setIsSubmitting(false);
  }

  /*
   * ----------------------------------------------------
   * LOADING EXISTING RSVP
   * ----------------------------------------------------
   */

  if (isLoadingExistingRSVP) {
    return (
      <div className="py-10 text-center">
        <p className="text-[var(--color-text-light)]">Loading your RSVP...</p>
      </div>
    );
  }

  /*
   * ----------------------------------------------------
   * SUCCESS SCREEN
   * ----------------------------------------------------
   */

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[var(--color-gold)]
            text-2xl
            text-white
          "
        >
          ✓
        </div>

        <h3
          className="
            mt-6
            text-3xl
            font-light
            text-[var(--color-text)]
          "
        >
          Thank You
        </h3>

        <p
          className="
            mt-4
            text-lg
            text-[var(--color-text-light)]
          "
        >
          Your RSVP has been received, {invitation.family_name}.
        </p>

        <p
          className="
            mt-2
            text-sm
            text-[var(--color-text-light)]
          "
        >
          We look forward to celebrating with you.
        </p>
      </div>
    );
  }

  /*
   * ----------------------------------------------------
   * EXISTING RSVP SCREEN
   * ----------------------------------------------------
   */

  if (hasExistingRSVP && !showConfirmation) {
    const attendingGuests = guests.filter((guest) =>
      selectedGuests.includes(guest.id)
    );

    return (
      <div className="py-6">
        <div className="text-center">
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-[var(--color-gold)]
              text-2xl
              text-white
            "
          >
            ✓
          </div>

          <p
            className="
              mt-6
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--color-gold)]
            "
          >
            RSVP Received
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-light
              text-[var(--color-text)]
            "
          >
            We Can't Wait To Celebrate
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-base
              leading-7
              text-[var(--color-text-light)]
            "
          >
            Thank you, {invitation.family_name}. Your RSVP has already been
            recorded.
          </p>
        </div>

        {attendingGuests.length > 0 && (
          <div className="mt-8 space-y-4">
            {attendingGuests.map((guest) => (
              <div
                key={guest.id}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  border
                  border-[var(--color-gold)]
                  bg-[var(--color-card-alt)]
                  px-6
                  py-5
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--color-gold)]
                    text-white
                  "
                >
                  ✓
                </div>

                <div>
                  <p
                    className="
                      text-lg
                      font-medium
                      text-[var(--color-text)]
                    "
                  >
                    {guest.full_name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[var(--color-text-light)]
                    "
                  >
                    Attending
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setHasExistingRSVP(false)}
          className="
            mt-8
            w-full
            rounded-full
            border
            border-[var(--color-gold)]
            px-8
            py-4
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[var(--color-text)]
            transition-all
            duration-300
            hover:bg-[var(--color-card-alt)]
          "
        >
          Update RSVP
        </button>
      </div>
    );
  }

  /*
   * ----------------------------------------------------
   * CONFIRMATION SCREEN
   * ----------------------------------------------------
   */

  if (showConfirmation) {
    const selectedGuestObjects = guests.filter((guest) =>
      selectedGuests.includes(guest.id)
    );

    return (
      <div className="py-6">
        <div className="text-center">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[var(--color-gold)]
            "
          >
            Please Confirm
          </p>

          <h3
            className="
              mt-4
              text-3xl
              font-light
              text-[var(--color-text)]
            "
          >
            Your Attendance
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-base
              leading-7
              text-[var(--color-text-light)]
            "
          >
            Thank you, {invitation.family_name}. You have selected the following
            guests to celebrate with us.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {selectedGuestObjects.map((guest) => (
            <div
              key={guest.id}
              className="
                flex
                items-center
                gap-4
                rounded-3xl
                border
                border-[var(--color-gold)]
                bg-[var(--color-card-alt)]
                px-6
                py-5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color-gold)]
                  text-white
                "
              >
                ✓
              </div>

              <div>
                <p
                  className="
                    text-lg
                    font-medium
                    text-[var(--color-text)]
                  "
                >
                  {guest.full_name}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-[var(--color-text-light)]
                  "
                >
                  Attending
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="
            mt-8
            text-center
            text-sm
            text-[var(--color-text-light)]
          "
        >
          {selectedGuests.length}{" "}
          {selectedGuests.length === 1 ? "guest" : "guests"} will be joining us.
        </p>

        {submitError && (
          <p className="mt-6 text-center text-sm text-red-600">{submitError}</p>
        )}

        <div className="mt-8 flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setShowConfirmation(false)}
            disabled={isSubmitting}
            className="
              w-full
              rounded-full
              border
              border-[var(--color-border)]
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--color-text)]
            "
          >
            Go Back
          </button>

          <button
            type="button"
            onClick={handleConfirmRSVP}
            disabled={isSubmitting}
            className="
              w-full
              rounded-full
              bg-[var(--color-gold)]
              px-8
              py-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isSubmitting ? "Submitting..." : "Confirm RSVP"}
          </button>
        </div>
      </div>
    );
  }

  /*
   * ----------------------------------------------------
   * GUEST SELECTION SCREEN
   * ----------------------------------------------------
   */

  return (
    <form onSubmit={handleContinue}>
      <RSVPGuests
        guests={guests}
        selectedGuests={selectedGuests}
        onToggle={toggleGuest}
      />

      <RSVPMessage />

      <div className="mt-8">
        <RSVPButton>Continue</RSVPButton>
      </div>
    </form>
  );
}
