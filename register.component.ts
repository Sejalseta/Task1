import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  title ="Register Users";
  alert:boolean =false;
  disabled: true;

  Title: any = ['Mr', 'Mrs', 'Miss', 'Ms'];


  constructor(private formBuilder: FormBuilder,private commonservice:CommonService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required,Validators.maxLength(500)],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        gender: ['Male',Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
    });
  }
  
  get f() { return this.registerForm.controls; }

    onSubmit(){
      console.log(this.registerForm.value);
      //  this.commonservice.createUser(this.registerForm.value).subscribe((result)=>{
    
      //    console.log(result,"data created successfully");
      //    this.alert = true;
      //    this.registerForm.reset();
    
    
      //  });
      
    }
    closeAlert(){

      this.alert=false;
    }

     onReset() {
         this.submitted = false;
         this.registerForm.reset();
     }
    

     }






