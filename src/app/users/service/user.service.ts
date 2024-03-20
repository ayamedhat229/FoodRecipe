import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }
  saveFavouriteRecipe(id:number):Observable<any>{
    return this._httpClient.post('userRecipe',{recipeId:id})
  }
  getFavRecipe():Observable<any>{
    return this._httpClient.get('userRecipe')
  }
  onRemoveRecipe(id:number):Observable<any>{
    return this._httpClient.delete(`userRecipe/${id}`)
  }
  getCurrentUser():Observable<any>{
    return this._httpClient.get('Users/currentUser')
  }
 updateUserProfile(data:any):Observable<any>{
  return this._httpClient.put('Users/',data)
 }
}
