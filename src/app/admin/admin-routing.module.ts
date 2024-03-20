import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,children:[
  {path:'categories', component:CategoriesComponent},
  {path:'recipe', component:RecipesComponent},
  {path:'add-edit-recipe', component:AddRecipeComponent},
  {path:'edit/:id', component:AddRecipeComponent},
  {
    path: '',
    loadChildren: () => import('../admin/list-user/list-user.module').then(m =>m.ListUserModule)
  }, 
  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
