export const wedding = {
  couple: {
    groom: "Arvin",
    bride: "Angelica",
  },

  wedding: {
    date: "September 25, 2027",
    time: "2:00 PM",
  },

  venue: {
    ceremony: {
      title: "Ceremony",
      icon: "church",
      place: "Our Lady of Mount Carmel",
      address: "Quezon City",
      date: "Saturday, September 25, 2027",
      time: "2:00 PM",
      map: "https://maps.google.com",
    },

    reception: {
      title: "Reception",
      icon: "champagne",
      place: "Matrix Events Place",
      address: "Quezon City",
      date: "Saturday, September 25, 2027",
      time: "5:00 PM",
      map: "https://maps.google.com",
    },
  },

  hero: {
    invitation: "Together with our families",
    message: "joyfully invite you to celebrate",
    promise: "the beginning of our forever.",
  },

  story: {
    heading: "FIVE YEARS IN THE MAKING",
    subtitle: "Every love story has a beginning. Here's ours.",

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
  },
} as const;
