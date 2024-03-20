import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeUserRoutingModule } from './recipe-user-routing.module';
import { RecipeUserComponent } from './recipe-user/recipe-user.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogContent } from '@angular/material/dialog';
import { RecipeDetailsComponent } from './recipe-user/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    RecipeUserComponent,
    RecipeDetailsComponent,
   
  ],
  imports: [
    CommonModule,
    RecipeUserRoutingModule,
    SharedModule,
   MatPaginatorModule,
   FormsModule,
   MatSelectModule,
   MatDialogContent

  ]
})
export class RecipeUserModule { }
