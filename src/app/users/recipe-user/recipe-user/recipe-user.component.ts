import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ICategory } from '../../../../models/category';
import { DeleteCategoryComponent } from '../../../admin/delete-category/delete-category.component';
import { HelperService } from '../../../admin/helper.service';
import { CategoryService } from '../../../services/category.service';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-user',
  templateUrl: './recipe-user.component.html',
  styleUrl: './recipe-user.component.scss'
})
export class RecipeUserComponent {
// tableRecipes:IRecipes[]=[];
tags:any[]=[];
tableData:ICategory[]=[];
 tableRecipes:any;
 SearchKey:string='';
 imagePath:string='https://upskilling-egypt.com/';
 DummyImage:string='../../../assets/images/reciepePic.jpg';
 length = 20;
 pageSize = 5;
 pageNumber=1;
 pageIndex = 0;
 pageSizeOptions = [5, 10, 20];
 pageEvent:PageEvent|any;

 constructor(private _recipeService:RecipeService, public dialog: MatDialog, private _helperService:HelperService, private _categoryService:CategoryService){}
 getRecipes(){
   let paramsApi={
     pageSize:this.pageSize,
     pageNumber:this.pageNumber,
     name:this.SearchKey,
     }
   this ._recipeService.getAllRecipes(paramsApi).subscribe({
     next:(res)=>{
       this.tableRecipes=res.data;
       console.log(res)
   },error:(err)=>{
     console.log(err)
   },complete:()=>{
   }
 })
 }
   //delete Recipe
   openDeleteRecipes(categoryName:any):void{
     console.log(categoryName)
     const dialogRef = this.dialog.open(DeleteCategoryComponent, {
       data:categoryName
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
      console.log(result)
      if(result){
       this.deleteRecipe(result)
      }
   });
   }
   deleteRecipe(recipeId:any){
      this._recipeService.onDeleteRecipe(recipeId).subscribe({
       next:(res)=>{
         console.log(res)
       },error:(err:any)=>{
         console.log(err)
       },complete:()=>{
         this.getRecipes()
       }
      })
   }
   //get all Tags
   getAllTages(){
     this._helperService.getTags().subscribe({
       next:(res)=>{
         console.log(res)
         this.tags=res
        },error:(err:any)=>{
          console.log(err)
        },complete:()=>{
     }})
   }
 getAllCategories(){
   this._categoryService.getAllCartegories(1000).subscribe({
     next:(res)=>{
       console.log(res)
       this.tableData=res.data;
     }
   })
 
 }
   handlePageEvent(e: PageEvent) {
     this.pageEvent = e;
     this.length = e.length;
     this.pageSize = e.pageSize;
     //this.pageNumber=e.pageNumber;
     this.pageIndex = e.pageIndex;
   }
 ngOnInit(): void {
   this.getRecipes()
  this.getAllTages()
  this.getAllCategories()
 }
}
