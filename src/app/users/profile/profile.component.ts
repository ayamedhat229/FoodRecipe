import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  constructor(private _userService:UserService, private toastr:ToastrService, private _Router:Router){}
  ngOnInit(): void {
    this.getUser()
  }

userData: any;
files: File[] = [];
imgSrc:any;
data:any;
hiden:boolean=true;
imageUrl:string='https://upskilling-egypt.com/';
  onSelect(event:any) {
    this.imgSrc=event.addedFiles[0];
    this.profileForm.get('profileImage')?.setValue(this.imgSrc)
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
 
  profileForm=new FormGroup({
    userName:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    country:new FormControl(null,[Validators.required]),
    phoneNumber:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required]),
    profileImage:new FormControl(null)
   })
  onSubmit(data: FormGroup) {
    console.log(data.value);
      let myData = new FormData();
      myData.append('userName', data.value.userName);
      myData.append('email', data.value.email);
      myData.append('country', data.value.country);
      myData.append('phoneNumber', data.value.phoneNumber);
      myData.append('confirmPassword', data.value.confirmPassword);
      myData.append('profileImage',this.imgSrc,this.imgSrc.name)
      this._userService.updateUserProfile(myData).subscribe({
        next:(res)=>{
         console.log(res)
        },
        error:(err)=>{
         console.log(err)
        },
        complete:()=>{
          this.toastr.success('Edit Profile SuccessFully','Success');
        }
       })
      
  }

  getUser(){
  this._userService.getCurrentUser().subscribe({
    next:(res)=>{
      console.log(res)
      this.userData=res;
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.imgSrc=this.imageUrl+this.userData.imagePath
      this.profileForm.patchValue({
        userName:this.userData.userName,
        email:this.userData.email,
        country:this.userData.country,
        phoneNumber:this.userData.phoneNumber,
        confirmPassword:this.userData.confirmPassword,
        profileImage:this.userData.imagePath,
       
     })
   
   }
   
 })
}

cancelSaveData(){
  this.toastr.error('Edit Profile not success','try again');
  
}
}
