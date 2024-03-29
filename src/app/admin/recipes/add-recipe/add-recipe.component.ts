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
imageUrl:string='https://upskilling-egypt.com/';
recipeId:number=0;
recipeData:any;
ids: any[] = [];
files: File[] = [];
constructor(private _ActivatedRoute:ActivatedRoute,private toastr:ToastrService,private _Router:Router ,private _recipeService:RecipeService, public dialog: MatDialog, private _helperService:HelperService, private _categoryService:CategoryService){
  this.recipeId=_ActivatedRoute.snapshot.params['id']
}
recipeForm=new FormGroup({
  id:new FormControl(null,[Validators.required]),
  name:new FormControl(null,[Validators.required]),
  tagId:new FormControl(null,[Validators.required]),
  price:new FormControl(null,[Validators.required]),
  categoriesIds:new FormControl(null,[Validators.required]),
  description:new FormControl(null,[Validators.required]),
  recipeImage:new FormControl(null,[])
 })
 onSubmit(data:FormGroup){
console.log(data.value)
data.value.id=this.recipeId;
let myData=new FormData();
  data.value.id=this.recipeId;
  myData.append('name',data.value.name);
  myData.append('tagId',data.value.tagId);
  myData.append('price',data.value.price);
  myData.append('categoriesIds',data.value.categoriesIds);
  myData.append('description',data.value.description);
 // myData.append('recipeImage',this.imgSrc.name);
 debugger
  myData.append('recipeImage',this.imgSrc,this.imgSrc.name);
  console.log(myData)
  if(this.recipeId){
    myData.append('id',data.value.id)
     this.editRecipe(myData)
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
 addRecipe(data:any){
  this._recipeService.onAddRecipe(data).subscribe({
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

 }

 onSelect(event:any) {
  this.imgSrc=event.addedFiles[0];
  this.recipeForm.get('recipeImage')?.setValue(this.imgSrc)
  console.log(event);
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
    console.log(err)
 },
 complete:()=>{
let arr:any[]=[...this.recipeData.category]
this.ids=arr.map(x=>x.id);
this.imgSrc=this.imageUrl+this.recipeData.imagePath
 console.log(this.imgSrc)
 this.recipeForm.patchValue({
 name:this.recipeData.name,
 tagId:this.recipeData.tag.id,
 price:this.recipeData.price,
 description:this.recipeData.description,
 recipeImage:this.recipeData.imagePath,
 categoriesIds:this.recipeData.category.map((x:any)=>x.id),
 
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

