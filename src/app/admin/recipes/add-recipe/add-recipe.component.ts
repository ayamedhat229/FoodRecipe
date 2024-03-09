import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../../../services/category.service';
import { HelperService } from '../../helper.service';
import { ICategory } from '../../../../models/category';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { IRecipes } from '../../../../models/recipes';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent implements OnInit{
tagId:number=0;
categorieIds:number=0;
tableData:ICategory[]=[];
tags:any[]=[];
imgSrc:any;
recipeId:number=0;
recipeData:any;

ids: any[] = [];
  imagePath: any;

constructor(private _ActivatedRoute:ActivatedRoute,private toastr:ToastrService,private _Router:Router ,private _recipeService:RecipeService, public dialog: MatDialog, private _helperService:HelperService, private _categoryService:CategoryService){
  this.recipeId=_ActivatedRoute.snapshot.params['id']
}

recipeForm=new FormGroup({
  name:new FormControl(null,[Validators.required]),
  tagId:new FormControl(null,[Validators.required]),
  price:new FormControl(null,[Validators.required]),
  categoriesIds:new FormControl(null,[Validators.required]),
  description:new FormControl(null,[Validators.required]),
 })
 onSubmit(data:FormGroup){
console.log(data.value)
data.value.id=this.recipeId;
let myData=new FormData();
  myData.append('name',data.value.name);
  myData.append('tagId',data.value.tagId);
  myData.append('price',data.value.price);
  myData.append('categoriesIds',data.value.categoriesIds);
  myData.append('description',data.value.description);
  myData.append('recipeImage',this.imgSrc);
  console.log(myData)
  this._recipeService.onAddRecipe(myData).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.toastr.success('Add Recipe SuccessFully','Success');
      this._Router.navigateByUrl('dashboard/admin/recipe')
    }
  })
 if(this.recipeId){
  myData.append('id',data.value.id)
   this.editRecipe(data)
 }
else{
  this.addRecipe(myData)
}
 }
 editRecipe(data:any){
  this._recipeService.onEditRecipe(this.recipeId,data).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this.toastr.success('Edit Recipe SuccessFully','Success');
      this._Router.navigateByUrl('dashboard/admin/recipe')
    }
  })
 }
 addRecipe(mydata:any){
  this._recipeService.onAddRecipe(mydata).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })

 }
 files: File[] = [];
onSelect(event:any) {
  this.imgSrc=event.addedFiles[0];
  console.log(this.imgSrc);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
getAllTages(){
  this._helperService.getTags().subscribe({
    next:(res: any)=>{
      console.log(res)
      this.tags=res
     },error:(err:any)=>{
       console.log(err)
     },complete:()=>{
      
  }})
}
getAllCategories(){
this._categoryService.getAllCartegories(1000).subscribe({
  next:(res:any)=>{
    console.log(res)
    this.tableData=res.data;
  }
})

}
getAllRecipesId(id:number){
  this._recipeService.getRecipeById(id).subscribe({
     next:(res)=>{
      console.log(id)

  this.recipeData=res;
  console.log(res)
 },
 error:(err)=>{

 },
 complete:()=>{
let arr:any[]=[...this.recipeData.category]
 this.ids=arr.map(x=>x.id);
 //console.log(this.ids)
 this.recipeForm.patchValue({
 name:this.recipeData.name,
 tagId:this.recipeData.tag.id,
 price:this.recipeData.price,
 description:this.recipeData.description,
 categoriesIds:this.recipeData.category.map((x:any)=>x.id),
 //recipeImage:this.imagePath+this.recipeData.recipeImage
 })
}
  })
}
ngOnInit(): void {
  this.getAllTages()
  this.getAllCategories()
  if(this.recipeId>0){
    this.getAllRecipesId(this.recipeId)
  }
  
}
}

