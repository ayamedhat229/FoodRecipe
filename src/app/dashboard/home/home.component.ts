import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
interface type{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
  textSpan:string;
  paragraph:string;
  buttonName:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userName=localStorage.getItem('userName');
  constructor(private _Router:Router, private _AuthService:AuthService){}
  ngOnInit(): void {
    this.openFillRecipes()
  }
 
  isAdmin(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'SuperAdmin'? true : false;
  }

  isUser(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'SystemUser'? true : false;
  }
  type: type[] = [
    {
      text: 'Fill the',
      link: '/dashboard/admin/recipe',
      icon: 'fa-solid fa-arrow-right',
      textSpan:'Recipe',
      paragraph:'you can now fill the meals easily using the table and form , click here and sill it with the table !',
      buttonName:'Fill Recipe',
      isActive: this.isAdmin()
    },
    {
      text: 'Show the',
      link: '/dashboard/users/recipe-user',
      icon: 'fa-solid fa-arrow-right',
      textSpan:'Recipe',
      paragraph:'you can now show the meals easily using this button, click here and sill it with the table !',
      buttonName:'Show Recipe',
      isActive: this.isUser()
    },
  ]
 
  userRole:any='';
  openFillRecipes(){
    if(this.userRole=='SuperAdmin'){
      this._Router.navigateByUrl('/dashboard/admin/recipes')
    }
    else if(this.userRole=='SystemUser'){
      this._Router.navigateByUrl('dashboard/users/recipe-user')
    }
  }

}
