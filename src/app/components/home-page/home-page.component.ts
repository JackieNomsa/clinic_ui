import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingModel } from 'src/app/model/booking-model';
import { RetrieveModel } from 'src/app/model/retrieve-model';
import { BookingService } from 'src/app/service/booking-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  bookingForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    idNumber: new FormControl(''),
    idType: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phone: new FormControl(''),

  });
  
  retrieveForm = new FormGroup({
    idNumber: new FormControl(''),
    idType: new FormControl('')
    });

  bookAslot: boolean = false;
  getReference: boolean = false;
  cancelSlot: boolean = false;
  home: boolean = true;
  newBooking: BookingModel;
  getBooking: RetrieveModel;


  
  public bookASlotToogle() :void{
    this.bookAslot = true;
    this.getReference = false;
    this.cancelSlot = false;
    this.home = false;
    console.log(this.bookAslot);
  }

  public getReferenceToogle() :void{
    this.getReference = true;
    this.bookAslot = false;
    this.cancelSlot = false;
    this.home = false;
    console.log(this.getReference);
  }

  public cancelSlotToogle() :void{
    this.cancelSlot = true;
    this.bookAslot = false;
    this.getReference = false;
    this.home = false;
  }

  
  public bookSlot() {
     //access for data, validate and call bookSlot
    // if status returned is still waiting user has no time assigned and will receive an sms once a slot is available and assigned
    // might add the option to update slot if it is done 24 hours before assigned slot
    this.newBooking = new BookingModel(this.bookingForm.value);
    
  }


  public cancelBookedSlot(){
    //validate id, check if slot exists and cancel it, return error if does not exist
    // if success should inform user that slot is cancelled and if need be they can start booking from scratch
    this.getBooking = new RetrieveModel(this.retrieveForm.value);

  }

  
  public getCurrentSlot(){
    //validate id, check if slot with id exixts esle return error
    //if successful should display id, name, date and time to user
    this.getBooking = new RetrieveModel(this.retrieveForm.value);

  }
  
}
