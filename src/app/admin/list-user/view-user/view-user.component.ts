import { Component, OnInit } from '@angular/core';
import { ListuserService } from '../listuser.service';
import { error } from 'console';
import { ActivatedRoute } from '@angular/router';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { IList } from '../list';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit {
   tableUser: IList[]|any=[];
  userListId:any;
  constructor(private _listUser:ListuserService,_ActivatedRoute:ActivatedRoute){
this.userListId=_ActivatedRoute.snapshot.params['id']
console.log(this.userListId)
  }
  openViewProfile(id:IList){
    this._listUser.getUserByID(id).subscribe({
      next:(res)=>{
        this.tableUser=res;
        console.log(this.tableUser)
      },
      error:(err)=>{
         console.log(err)
      }
    })
  }
ngOnInit(): void {
  this.openViewProfile(this.userListId)
}
}