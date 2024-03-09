import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditcomponentComponent } from './add-editcomponent/add-editcomponent.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    AddEditcomponentComponent,
    DeleteCategoryComponent,
   RecipesComponent,
  AddRecipeComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxDropzoneModule,
    SharedModule
  ],

})
export class AdminModule { }
