import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IList } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListuserService implements OnInit{

  constructor(private _httpClient:HttpClient) { }
  getUserList():Observable<any>{
   return this._httpClient.get('Users/')
  }
  deleteUser(id:IList):Observable<any>{
   return this._httpClient.delete(`Users/${id}`)
  }
  getUserByID(id:IList):Observable<any>{
    return this._httpClient.get(`Users/${id}`,)
  }
  ngOnInit(): void {
    
  }
}
