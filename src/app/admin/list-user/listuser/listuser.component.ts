import { Component, OnInit } from '@angular/core';
import { ListuserService } from '../listuser.service';
import { IList } from '../list';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteCategoryComponent } from '../../delete-category/delete-category.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteUserListComponent } from '../delete-user-list/delete-user-list.component';

import { profile } from 'node:console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.scss'
})
export class ListuserComponent implements OnInit {
  tableUser: IList[]=[];
  imagePath:string='https://upskilling-egypt.com/';
  DummyImage:string='../../../assets/images/userphoto.png';

  constructor(private _listUser:ListuserService,public dialog: MatDialog,private toastr: ToastrService, private _Router:Router){}
  getAllUserRecipe(){
    this._listUser.getUserList().subscribe({
      next:(res)=>{
       console.log(res)
       this.tableUser=res.data
      },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
    }
    })
  }
  openDeleteListUser(userName:IList):void{
    console.log(userName)
    const dialogRef = this.dialog.open(DeleteUserListComponent, {
      data:userName
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
     this.onDeleteUser(result)
     }
  });
  }
  onDeleteUser(userListId:IList){
    this._listUser.deleteUser(userListId).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.getAllUserRecipe()
      this.toastr.success('The user has been deleted successfully','Success');
    }
    })
  }
  /*openViewProfile(userProfile:IList){
    this._Router.navigateByUrl('dashboard/admin/listuser/view-profile')
    /*console.log(userProfile)
    const dialogRef = this.dialog.open(ViewProfileComponent, {
      data:userProfile
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.onViewProfile(result)
     }*/
 
ngOnInit(): void {
 this.getAllUserRecipe()
}
}
