import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public host="http://localhost:8080/"

  candidatserv;
  jwt: string;
  candidat : string;
  roles : Array<string>;

  constructor( private http:HttpClient) { }

  add_candidat(candidat){
    //console.log(candidat)
     return this.http.post(this.host+"add_candidat",candidat)
  }
  edit_candidat(candidat){
    //console.log(candidat)
     return this.http.post(this.host+"edit_candidat",candidat)
  }

  connexion_candidat(user){
    //console.log(candidat)
    //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
    // return this.http.post(this.host+"connexion_candidat",user)
    return this.http.post(this.host+"login",user,{observe:'response'})
     
  }

  saveToken(jwt1: string){
    localStorage.setItem('token',jwt1);
    this.jwt=jwt1;
  }

  parseJWT(){
      let jwtHelper=new JwtHelperService();
      let objJWT=jwtHelper.decodeToken(this.jwt);
      this.candidat=objJWT.obj;
      this.roles=objJWT.roles;

  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0
  }

  isCandidat(){
    return this.roles.indexOf('CANDIDAT')>=0
  }

  isAuthenticated(){
    return this.roles
  }

}
