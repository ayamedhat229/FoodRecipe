import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserRoutingModule } from './list-user-routing.module';
import { ListuserComponent } from './listuser/listuser.component';
import { SharedModule } from '../../shared/shared.module';
import { DeleteUserListComponent } from './delete-user-list/delete-user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListuserComponent,
    DeleteUserListComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ListUserModule { }
