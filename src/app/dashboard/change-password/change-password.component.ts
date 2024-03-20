import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup ,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

    hide:boolean=true;
    hiden:boolean=true;
    hidePass:boolean=true;
    constructor(private _AuthService:AuthService, private _Router:Router,private toastr: ToastrService){}
    changePasswordForm=new FormGroup({
      oldPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
      newPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
      confirmNewPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    })
    onSubmit(data:FormGroup){
      console.log(data)
      this._AuthService.changePassword(data.value).subscribe({
        next:(res)=>{
          this._Router.navigateByUrl('/auth/login');
          console.log(res);
        },error:(err:any)=>{
          console.log(err)
          this.toastr.error('Try again', 'Not Change Password');
        },complete:()=>{
          this.toastr.success('Change Password done', 'Sucess');
        }
      })
    }
    ngOnInit(): void {
      
    }
  
  }
  
