import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { IRecipes} from '../../../models/recipes';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../categories/delete-category/delete-category.component';
import { PageEvent } from '@angular/material/paginator';
import { HelperService } from '../helper.service';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../../models/category';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
 // tableRecipes:IRecipes[]=[];
 tags:any[]=[];
 tableData:ICategory[]=[];
  tableRecipes:any;
  SearchKey:string='';
  imagePath:string='https://upskilling-egypt.com/';
  DummyImage:string='../../../assets/images/reciepePic.jpg';
  length = 50;
  pageSize = 5;
  pageNumber=1;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  pageEvent:PageEvent|any;
  tagId:number=0;
  categorieIds:number=0;
  tableResponse:any;
  constructor(private _recipeService:RecipeService, public dialog: MatDialog, private _helperService:HelperService, private _categoryService:CategoryService){}
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
        console.log(res.pageSize)
        this.tableResponse = res;
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
  getAllCategoriesName(){
    this._categoryService.getAllCartegories(1000).subscribe({
      next:(res)=>{
        console.log(res)
        this.tableData=res.data;
      }
    })
  
  }
    handlePageEvent(e: PageEvent) {
     // this.pageEvent = e;
     // this.length = e.length;
      this.pageSize = e.pageSize;
      //this.pageNumber=e.pageNumber;
      this.pageIndex = e.pageIndex;
      this.getRecipes();
    }
  ngOnInit(): void {
    this.getRecipes()
   this.getAllTages()
   this.getAllCategoriesName()
  }
}
