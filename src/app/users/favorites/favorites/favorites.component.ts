import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit{
  imagePath:string='https://upskilling-egypt.com/';
 DummyImage:string='../../../assets/images/reciepePic.jpg';
tableRecipe:any[]=[];
  constructor(private _userService:UserService,private toastr: ToastrService){}
 getAllFavRecipe(){
  this._userService.getFavRecipe().subscribe({
    next:(res)=>{
      console.log(res)
      this.tableRecipe=res.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }
 removeRecipe(id:number){
  this._userService.onRemoveRecipe(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.getAllFavRecipe()
      this.toastr.success('The Recipe has been deleted successfully','Success');
    }

  })
 }
  ngOnInit(): void {
this.getAllFavRecipe()
  }

}
