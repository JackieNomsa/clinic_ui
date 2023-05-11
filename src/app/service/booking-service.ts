import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BookingModel } from '../model/booking-model';

@Injectable()
export class BookingService{
    public url:string = "http://localhost:8080/clinic"

    constructor(private http: HttpClient) {

     }

    public bookASlot(bookingData: BookingModel) {
        return this.http.post(`${this.url}/create`,bookingData);
    }

    
    public getBooking(id: string) {
        return this.http.get<BookingModel>(`${this.url}/getById/${id}`);
    }

  
    public cancelSlot(id: string) {
        return this.http.post(`${this.url}/delete/${id}`,"")
    }

    public updateSlot(bookingData: BookingModel) {
        return this.http.post(`${this.url}/update`,bookingData);
    }
}