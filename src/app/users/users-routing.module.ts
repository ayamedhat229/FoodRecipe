import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{ path: '', component: UsersComponent },
{path:'profile',component:ProfileComponent},
{
  path: '',
  loadChildren: () => import('../users/recipe-user/recipe-user.module').then(m =>m.RecipeUserModule)
},
{
  path: '',
  loadChildren: () => import('../users/favorites/favorites.module').then(m =>m.FavoritesModule)
} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
