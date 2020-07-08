import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../userlogin.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user : User;
  user1 = new BehaviorSubject<Userlogin>(null);
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit() {
 
  }
  
  register(form) {
    console.log(form.value);
    console.log(form.touched);
    console.log(form.submitted);   
  }
  onCreatePost(postData: {GST: string, ShopName: string, contact: number, email: string, password: string })
  {

    console.log(postData);

    this.http .post('http://localhost:3005/api/register',postData).subscribe(responseData => {
        console.log(responseData);
        alert("welcome account is created");
      });
  }

  loginClicked(form:NgForm)
  {
    

    const user_email = form.value.email;
    const user_password = form.value.password;

    const login = { email :user_email,password:user_password};

    //alert(password);

    this.http.post('http://localhost:3005/api/login',login).subscribe(responseData => {
      console.log(responseData);
      alert("welcome ,Shop Local");

    //   if(responseData.user.email)
    // {
    //     this.handleAuthentication(responseData.user.email,responseData.user._id,responseData.user.fullName,responseData.user.contact,responseData.user.purchases);
        
        this.router.navigate(['/profile']);

      // } 
    })
    form.reset();
  }

  private handleAuthentication(
    email: string,
    userId: string,
    gst: string,
    ShopName: string,
    contact: string,
    sells : string
  ) 
  {
   
    const user1 = new Userlogin(email,userId,gst,ShopName,contact,sells);
    this.user1.next(user1);

    //localStorage.setItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', ShopName);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
    localStorage.setItem('user_contact', contact); 
    localStorage.setItem('user_purchases', sells); 
    //sessionStorage.setItem('user_name', fullName);
  }
  

}


// export class LoginComponent implements OnInit {
  
  
  

// }


