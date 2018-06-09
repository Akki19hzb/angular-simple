import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User App';

  user: User = new User();

constructor(private router: Router, private userService: UserService) {

  }
    
  btnClick= function () {
    this.router.navigate(['/add']);
};

  registerUser(): void {
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.password);
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
    console.log(this.user.email);
    console.log(this.user.password);
    this.user.name="user";
    this.userService.loginUser(this.user)
        .subscribe( data => {
          console.log("Welcome" + data.name);
          if(data.email!=null&&data.password!=null)      
          {  
          console.log('success');
          alert("User logged in successfully.");
          }
          
          
        });
       
          this.user.email="";
          this.user.password="";
          this.user.name="";
	
  };

}
