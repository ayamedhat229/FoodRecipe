import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  constructor(private _httpClient:HttpClient) { }
  getAllRecipes(params:any):Observable<any>{
  return this._httpClient.get('Recipe',{ params})
  }
  onDeleteRecipe(id:any):Observable<any>{
    return this._httpClient.delete(`Recipe/${id}`)
  }
  onAddRecipe(data:any):Observable<any>{
    return this._httpClient.post('Recipe',data)
  }
  getRecipeById(id:number):Observable<any>{
    return this._httpClient.get(`Recipe/${id}`)
  }
  onEditRecipe(id:number,data:any):Observable<any>{
  return this._httpClient.put(`Recipe/${id}`, data)
  }
  ngOnInit(): void {
    
  }
}
