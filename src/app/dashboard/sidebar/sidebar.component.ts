import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private _AuthService: AuthService) {}
 
  isAdmin(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'SuperAdmin'? true : false;
  }

  isUser(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'SystemUser'? true : false;
  }

  Menu: Menu[] = [
    {
      text: 'home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      text: 'users',
      link: '/dashboard/admin/listuser',
      icon: 'fa-solid fa-users',
      isActive: this.isAdmin(),
    },
    {
      text: 'Recipes',
      link: '/dashboard/admin/recipe',
      icon: 'fa-solid fa-icons',
      isActive: this.isAdmin()
    },
    {
      text: 'Recipes',
      link: '/dashboard/users/recipe-user',
      icon: 'fa-solid fa-icons',
      isActive: this.isUser()
    },
    {
      text: 'Categories',
      link: '/dashboard/admin/categories',
      icon: 'fa-regular fa-calendar-days',
      isActive: this.isAdmin(),
    },
    {
      text: 'Favorites',
      link: '/dashboard/admin/favorites',
      icon: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
  ];
}