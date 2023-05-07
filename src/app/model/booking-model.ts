export class BookingModel {
  constructor(
    public patient_id: string,
     public first_name: string,
     public last_name: string,
     public status: string,
     public reference: number
    ) {}

}
