import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user'
import { Constants } from '../config/constants'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constants:Constants = new Constants
  constructor(private http: HttpClient) { }

  public cadastrarUser(user:User){
    let p = new Promise((f,r)=>{
      let url = `${this.constants.url}\cadastrar`
      this.http.post(url,user)
               .subscribe((data)=>{
                  f(data)
               },(err)=>{
                  r(err)
               })  
    })
    return p
  }
}
