import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeUserRoutingModule } from './recipe-user-routing.module';
import { RecipeUserComponent } from './recipe-user/recipe-user.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RecipeUserComponent,
   
  ],
  imports: [
    CommonModule,
    RecipeUserRoutingModule,
    SharedModule,
   MatPaginatorModule,
   FormsModule,
   MatSelectModule

  ]
})
export class RecipeUserModule { }
