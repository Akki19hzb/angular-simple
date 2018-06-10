import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { UserService } from '../user/user.service';
import { User } from "../models/user.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'User App';
  
    user: User = new User();
  constructor(private router: Router, private userService: UserService) { 
    
  }

  ngOnInit() {
    this.checkForlogged()
  }
  checkForlogged(){
    if(localStorage.getItem('valid')== 'true')
      this.router.navigate(['/home']);
  }
  btnClick= function () {
    this.router.navigate(['/add']);
};

  registerUser(): void {
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.password);
    if(this.user.email && this.user.password && this.user.name && this.user.name.trim() && this.user.email.trim() && this.user.password.trim() )
    this.userService.registerUser(this.user)
        .subscribe( data => {          
          alert("User created successfully.");
          console.log('success');
        });
        this.user.email="";
        this.user.password="";
        this.user.name="";
	
  };

  loginUser(): void {
    this.router.navigateByUrl('/home');
    console.log(this.user.email);
    console.log(this.user.password);
    this.user.name="user";
    if(this.user.email && this.user.password && this.user.email.trim() && this.user.password.trim() )
    this.userService.loginUser(this.user)
        .subscribe( data => {
          console.log("Welcome" + data);
          if(data.email!=null&&data.password!=null)      
          {  
          console.log('success');
          alert("User logged in successfully.");
          }
          this.router.navigateByUrl('/home');
          
        })
        ;
    else
      alert('Please provide info')    
       
          this.user.email="";
          this.user.password="";
          this.user.name="";
	
  };

}
