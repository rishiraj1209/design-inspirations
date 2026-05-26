import type { HotelData, YourOverview } from "../types";

export const hotels:HotelData[] = [
  {
    id: 1,
    name: "Holiday Inn Express",
    location: "United States",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecSbVWBSISglJu4HH-P-5bYfG1AfYxqeCzw&s",

    occupancy: 85,
    adr: 130,
    revPar: 115,

    propertyADR: 90,
    compSetADR: 85,
  },
  {
    id: 2,
    name: "Homewood Suites",
    location: "United States",
    logo: "https://cdn.worldvectorlogo.com/logos/homewood-suites-1.svg",

    occupancy: 40,
    adr: 150,
    revPar: 105,

    propertyADR: 90,
    compSetADR: 85,
  },
  {
    id: 3,
    name: "Best Western Plus",
    location: "United States",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7anhMPb2RWqCwFAceBnXMKt6ljUtBaP3pA&s",

    occupancy: 65,
    adr: 120,
    revPar: 95,

    propertyADR: 90,
    compSetADR: 85,
  },
  {
    id: 4,
    name: "Holiday Inn Express",
    location: "United States",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXasiloUpXJoEgUcEUCzp4iRZB3lNB_GCxjA&s",

    occupancy: 70,
    adr: 88,
    revPar: 75,

    propertyADR: 90,
    compSetADR: 85,
  },
];

// ================================
// Your Overview
// ================================

export const yourOverview:YourOverview[] = [
  {
    id: 1,
    hotelName: "Hotel 1 OCC",

    occupancy: 80,

    propertyADR: 90,

    compSetADR: 85,
  },
  {
    id: 2,
    hotelName: "Hotel 2 OCC",

    occupancy: 70,

    propertyADR: 90,

    compSetADR: 85,
  },
];