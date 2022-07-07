import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/models/bookings.model';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router } from '@angular/router';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {

  show: boolean;
  email$ =  sessionStorage.getItem('email');
  bookings$: Bookings[] = [];
  showMe:boolean=false;
  Token: any;
  Customerid:any;
  name$ = sessionStorage.getItem('name');

  constructor(private bookingsService: BookingsService, 
    public router: Router,private httpClient: HttpClient) { }

  ngOnInit() {

  //////////////////////////////

  this.invokeStripe();

  /////////////////////////////
    this.checkLogin();
    this.getBookingById();
    
  }

  /////////////////////////////////////////////////////



    makePayment(amount: any) {
      this.showMe = !this.showMe
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key:
          'pk_test_51JzaERSCKKUCZTpyRjqUXSC9A64pH4lOmSKTozgBf3Us7ahy2BUQPuym0gMDaZBQypJbb2aAQ5HAg5bWDgqTHvcK00BlX0Sw1a',
  
        locale: 'auto',
        token: function (stripeToken: any) {
          this.Token = stripeToken;
          console.log(stripeToken.card);
          alert('Amount Successfully paid');
        },


      });

 
      paymentHandler.open({
        name: 'Car Parking',
        description: 'Slot Booking',
        amount: amount * 100,
        currency: 'inr'
      });

      ////////pay-2//////////////

      (Customerid:any):Observable<any> => {
        return this.httpClient.post("https://api.stripe.com/v1/customers",{
          source: this.Token,
          name: this.name$,
          email: this.email$
        })

      }

      return this.httpClient.post('https://api.stripe.com/v1/charges',{
        amount: 5000,
        currency: "inr",
        customer: this.Customerid
      });

      ////////pay-2//////////////
    }

  
    invokeStripe() {
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement('script');
        script.id = 'stripe-script';
        script.type = 'text/javascript';
        script.src = 'https://checkout.stripe.com/checkout.js';
        window.document.body.appendChild(script);
      }
    }
  
  ///////////////////////////////////////////////////////


  ////////////////////////Payement-2/////////////////////////

    

  ///////////////////////////End//////////////////////

  getBookingById(){
    return this.bookingsService.getBookings(this.email$)
    .subscribe(data => {this.bookings$ = data, this.checkBookingFn();})
  }

  endBooking(bookingid){
    return this.bookingsService.endBooking(bookingid)
    .subscribe((data:{}) => {
      alert('Checked Out Successfully');
      location.reload();
      this.router.navigate(['dashboard/bookings'])
    })
  }
  checkBookingFn(){
    console.log()
    if (this.bookings$.length == 0){
      this.show = true
    }
    else{
      this.show = false
    }
  }

  checkLogin(){
    if (sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
  }

}
