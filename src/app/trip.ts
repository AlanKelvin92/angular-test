export class Trip {
  constructor(
    public depart: string,
    public arrive: string,
    public departDate: string,
    public returnDate: string,
    public passengers: number
  ) {  }
}