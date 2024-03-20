import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ICategory } from '../../../../models/category';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from '../../../admin/helper.service';
import { CategoryService } from '../../../services/category.service';
import { RecipeService } from '../../../services/recipe.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { UserService } from '../../service/user.service';
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
 tagId:number=0;
  categorieIds:number=0;
 constructor(private toastr:ToastrService,private _recipeService:RecipeService, public dialog: MatDialog, private _helperService:HelperService, private _categoryService:CategoryService,private _userService:UserService){}
 getRecipes(){
   let paramsApi={
    pageSize:this.pageSize,
     pageNumber:this.pageNumber,
     name:this.SearchKey,
     tagId:this.tagId,
     categoryId:this.categorieIds
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
   openRecipeDetails(item:any):void{
    console.log(item)
    const dialogRef = this.dialog.open(RecipeDetailsComponent, {
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.addFavoriteRecipe(result)
     }
  });
  }
  addFavoriteRecipe(id:number){
    this._userService.saveFavouriteRecipe(id).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
        this.toastr.error('try again', 'Recipe not Added to Favorites');
      },
      complete:()=>{
        this.toastr.success('Success', 'Recipe Added to Favorites');
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
     this.pageIndex = e.pageIndex;
     this.getRecipes()
   }
 ngOnInit(): void {
   this.getRecipes()
  this.getAllTages()
  this.getAllCategories()
 }
}
