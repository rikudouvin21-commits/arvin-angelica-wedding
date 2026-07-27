export const wedding = {
  // ==================================================
  // Couple
  // ==================================================
  couple: {
    groom: "Arvin",
    bride: "Angelica",
  },

  // ==================================================
  // Hero Section
  // ==================================================
  hero: {
    invitation: "Together with our families",
    message: "joyfully invite you to celebrate",
    promise: "the beginning of our forever.",
  },

  // ==================================================
  // Wedding Details
  // ==================================================
  wedding: {
    date: "September 25, 2027",
    time: "3:30 PM",
  },

  // ==================================================
  // Venue
  // ==================================================
  venue: {
    ceremony: {
      title: "Ceremony",
      place: "Our Lady of Lourdes Parish",
      address:
        "Barangay Silang Crossing West, Silang Junction North, Tagaytay City, Cavite",
      date: "Saturday, September 25, 2027",
      time: "3:30 PM",
      map: "https://www.google.com/maps/place/Our+Lady+of+Lourdes+Parish/@14.111319,120.9548167,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd7764459f8ce3:0xe729ecd446058e72!8m2!3d14.111319!4d120.9573916!16s%2Fg%2F1v41xzyh?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D",
    },

    reception: {
      title: "Reception",
      icon: "champagne",
      place: "Maharlika Events Tagaytay",
      address: "Brgy. Neogan, Tagaytay–Nasugbu Highway, Laurel, Batangas 4221",
      date: "Saturday, September 25, 2027",
      time: "5:00 PM",
      map: "https://www.google.com/maps?sca_esv=c0bc85df0c82686c&output=search&q=maharlika+events+tagaytay&source=lnms&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832U1CFDVh7aOiOPRjGOuZstvTlhb57BMLU2AX3oUWdK8XnLxYjTunoRA2zSewsqo1bicFtEK7lw0725HfCIR9iXWi7dalr1R1pBCsCu4_n53LC-px9wgfhTDSL-dpdK5n28l0rz4ZIGsS0aDVEHZURC1g30_030Ok2pWhLTs8GOo14qgj1A&entry=mc&ved=1t:200715&ictx=111",
    },
  },

  // ==================================================
  // Story
  // ==================================================
  story: {
    heading: "FIVE YEARS IN THE MAKING",
    subtitle: "Every love story has a beginning. Here's ours.",
  },

  // ==================================================
  // Timeline
  // ==================================================
  timeline: [
    {
      date: "February 2022",
      icon: "circle",
      title: "Two paths crossed.",
      description: "A chance meeting that changed everything.",
    },
    {
      date: "June 2022",
      icon: "circle",
      title: "We made it official.",
      description: "From best friends to partners in crime.",
    },
    {
      date: "May 2026",
      icon: "sparkle",
      title: "He asked... and She said YES!",
      description: "On a perfect day in May, we promised forever.",
    },
    {
      date: "September 2027",
      icon: "heart",
      title: "The best is yet to come.",
      description:
        'Join us as we say "I do" and start our greatest chapter yet.',
    },
  ],

  // ==================================================
  // Gallery
  // ==================================================
  gallery: [
    {
      image: "/gallery/photo1.jpg",
      alt: "Arvin and Angelica smiling together",
    },
    {
      image: "/gallery/photo2.jpg",
      alt: "Engagement portrait",
    },
    {
      image: "/gallery/photo3.jpg",
      alt: "Holding hands",
    },
    {
      image: "/gallery/photo4.jpg",
      alt: "Romantic portrait",
    },
  ],

  // ==================================================
  // Quote
  // ==================================================
  quote: {
    text: "Every love story is beautiful, but ours is our favorite.",
  },

  // ==================================================
  // RSVP
  // ==================================================
  rsvp: {
    title: "Kindly Respond",
    subtitle:
      "We can't wait to celebrate with you. Please let us know if you'll be joining us.",
  },
} as const;
