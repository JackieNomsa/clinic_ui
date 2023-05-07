import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
  });

  bookAslot: boolean = false;
  getReference: boolean = false;  

  
  public bookASlotToogle() :void{
    this.bookAslot = true;
    this.getReference = false;
    console.log(this.bookAslot)
  }

  public getReferenceToogle() :void{
    this.getReference = true;
    this.bookAslot = false;
    console.log(this.getReference)
  }
}
