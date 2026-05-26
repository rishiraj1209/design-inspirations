export interface HotelData{
    id: number,
    name: string,
    location: string,
    logo: string,

    occupancy: number,
    adr: number,
    revPar: number,

    propertyADR: number,
    compSetADR: number,
}

export interface YourOverview{
    id: number,
    hotelName: string,

    occupancy: number,

    propertyADR: number,

    compSetADR: number,
}