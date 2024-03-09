import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'listuser',component:ListuserComponent},
  {path:'view-user/:id',component:ViewUserComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUserRoutingModule { }
