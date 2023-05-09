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
  cancelSlot: boolean = false;  
  home: boolean = true

  
  public bookASlotToogle() :void{
    this.bookAslot = true;
    this.getReference = false;
    this.cancelSlot = false;
    this.home = false;
    console.log(this.bookAslot)
  }

  public getReferenceToogle() :void{
    this.getReference = true;
    this.bookAslot = false;
    this.cancelSlot = false;
    this.home = false;
    console.log(this.getReference)
  }

  public cancelSlotToogle() :void{
    this.cancelSlot = true;
    this.bookAslot = false;
    this.getReference = false;
    this.home = false
  }
}
