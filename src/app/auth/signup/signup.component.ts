import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  name : string = '';
  username : string = '';
  password : string = '';
  role: string='';

  user : User = new User();
  roles : string[];

  constructor( private authService : AuthService, private route : Router) { 
    this.roles = [
      'admin',
      'user'
    ]

  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = '';
  }
  signupForm:any = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.pattern("[A-Za-z].*")]),
    username: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
    role: new FormControl("", [Validators.required])

    
  });
  signupSubmited(){
    console.log(this.signupForm.get("name"));
  }
  get FullName() : FormControl{
    return this.signupForm.get("name");

  }
  get EmailId() : FormControl{
    return this.signupForm.get("username");

  }
  get Password() : FormControl{
    return this.signupForm.get("password");

  }
  get Role() : FormControl{
    return this.signupForm.get("role");

  }




  signup() {

    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.role = this.role;

    this.authService.signUp(this.user).subscribe(res => {
      if(res == null) {
        alert("Registration failed");
        this.ngOnInit();
      }else {
        console.log("Registration successful");
        alert("Registration successful");
        this.route.navigate(['/']);
      }
    }, err => {
      alert("Registration failed.");
      this.ngOnInit();
    })

  }
}
