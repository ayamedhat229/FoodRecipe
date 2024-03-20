import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
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
  constructor(private _AuthService: AuthService, private _Router:Router) {}
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
      text: 'Home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin()||this.isUser()
    },
    {
      text: 'Users',
      link: '/dashboard/admin/listuser',
      icon: 'fa-solid fa-users',
      isActive: this.isAdmin(),
    },
    {
      text: 'Recipes',
      link: '/dashboard/admin/recipe',
      icon: 'fa-solid fa-bowl-food',
      isActive: this.isAdmin()
    },
    {
      text: 'Recipes',
      link: '/dashboard/users/recipe-user',
      icon: 'fa-solid fa-bowl-food',
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
      link: '/dashboard/users/favorites',
      icon: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
    {
      text: 'Change Password',
      link: '/dashboard/change-Password',
      icon: 'fa-solid fa-unlock-keyhole',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      text: 'Profile',
      link: '/dashboard/users/profile',
      icon: 'fa-regular fa-id-badge',
      isActive: this.isUser(),
    },
  ];
}