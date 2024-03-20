import { Component, OnInit } from '@angular/core';
import { ListuserService } from '../listuser.service';
import { IList } from '../list';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
  SearchKey:string='';
  SearchKeyByEmail:string='';
  length = 20;
  pageSize = 5;
  pageNumber=1;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  pageEvent:PageEvent|any;

  constructor(private _listUser:ListuserService,public dialog: MatDialog,private toastr: ToastrService, private _Router:Router){}
 
  getUsers(){
    let paramsApi={
      pageSize:this.pageSize,
      pageNumber:this.pageNumber,
      userName:this.SearchKey,
      email:this.SearchKeyByEmail
      }
    this._listUser.getUserList(paramsApi).subscribe({
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
      this.getUsers()
      this.toastr.success('The user has been deleted successfully','Success');
    }
    })
  }
     handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
      this.getUsers()
    }
 
ngOnInit(): void {
 this.getUsers()
}
}
