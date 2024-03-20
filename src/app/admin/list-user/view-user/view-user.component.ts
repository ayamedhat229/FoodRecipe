import { Component, OnInit } from '@angular/core';
import { ListuserService } from '../listuser.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { IList } from '../list';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit {
  userData: IList[]|any=[];
  imagePath:string='https://upskilling-egypt.com/';
  DummyImage:string='../../../assets/images/userphoto.png';
  userListId:any;
  constructor(private _listUser:ListuserService,_ActivatedRoute:ActivatedRoute,private toastr:ToastrService){
this.userListId=_ActivatedRoute.snapshot.params['id']
console.log(this.userListId)
  }
  openViewProfile(id:string){
    this._listUser.getUserByID(id).subscribe({
      next:(res)=>{
        this.userData=res;
        console.log(this.userData)
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