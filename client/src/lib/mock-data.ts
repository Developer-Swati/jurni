import { GeneratedItinerary, SavedTrip } from "@/types/trip";

export const generateMockItinerary = (destination: string): GeneratedItinerary => {
  return {
    destination: `${destination} • 5 Days`,
    duration: "5 Days",
    cost: {
      total: "$2,450",
      accommodation: "$800",
      transport: "$650",
      activities: "$1000"
    },
    days: [
      {
        title: "Day 1 - Arrival & City Center",
        date: "March 15, 2024",
        activities: [
          {
            time: "9",
            name: "Eiffel Tower Visit",
            description: "Start your Paris adventure with the iconic Eiffel Tower. Book tickets in advance to avoid queues.",
            duration: "2-3 hours",
            cost: "$25"
          },
          {
            time: "12",
            name: "Lunch at Café de Flore",
            description: "Famous historic café in Saint-Germain-des-Prés. Try their classic French dishes.",
            duration: "1 hour",
            cost: "$35"
          },
          {
            time: "14",
            name: "Louvre Museum",
            description: "Explore the world's largest art museum. Don't miss the Mona Lisa and Venus de Milo.",
            duration: "3-4 hours",
            cost: "$20"
          }
        ],
        restaurant: {
          name: "Le Comptoir du Relais",
          rating: "4.5/5 • $$$"
        }
      },
      {
        title: "Day 2 - Museums & Culture",
        date: "March 16, 2024",
        activities: [
          {
            time: "10",
            name: "Notre-Dame Cathedral",
            description: "Visit the iconic Gothic cathedral and explore Île de la Cité.",
            duration: "1-2 hours",
            cost: "Free"
          },
          {
            time: "13",
            name: "Latin Quarter Walk",
            description: "Stroll through narrow streets, visit bookshops, and enjoy street artists.",
            duration: "2 hours",
            cost: "Free"
          },
          {
            time: "16",
            name: "Seine River Cruise",
            description: "Romantic evening cruise with dinner and city views from the water.",
            duration: "2 hours",
            cost: "$65"
          }
        ]
      }
    ]
  };
};

export const mockTrips: SavedTrip[] = [
  {
    id: "1",
    title: "Paris Adventure",
    destination: "Paris, France",
    dates: "March 15-20, 2024",
    travelers: "2 Adults",
    budget: "$2,450",
    status: "planned"
  },
  {
    id: "2",
    title: "Tokyo Explorer",
    destination: "Tokyo, Japan",
    dates: "April 10-17, 2024",
    travelers: "1 Adult",
    budget: "$3,200",
    status: "planned"
  },
  {
    id: "3",
    title: "Bali Getaway",
    destination: "Bali, Indonesia",
    dates: "May 5-12, 2024",
    travelers: "2 Adults",
    budget: "$1,800",
    status: "planned"
  },
  {
    id: "4",
    title: "London Historic",
    destination: "London, UK",
    dates: "June 1-8, 2024",
    travelers: "4 Adults",
    budget: "$4,500",
    status: "planned"
  },
  {
    id: "5",
    title: "NYC Weekend",
    destination: "New York, USA",
    dates: "July 20-23, 2024",
    travelers: "2 Adults",
    budget: "$1,200",
    status: "planned"
  },
  {
    id: "6",
    title: "Rome Classic",
    destination: "Rome, Italy",
    dates: "August 15-22, 2024",
    travelers: "2 Adults, 1 Child",
    budget: "$3,800",
    status: "planned"
  }
];
