import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private customHttpClient: HttpClient;
  public host="http://localhost:8080"

  jwt: string;
  candidat : string;
  roles : Array<string>;
  tokenType: String = 'Bearer'


  constructor( private http:HttpClient, backend: HttpBackend) { 
    this.customHttpClient = new HttpClient(backend);
  }

  add_candidat(candidat){
    //console.log(candidat)
     return this.customHttpClient.post(this.host+"/add_candidat",candidat)
  }
  edit_candidat(candidat){
    //console.log(candidat)
     return this.http.post(this.host+"/edit_candidat",candidat)
  }

  list_candidat(){
     return this.http.get(this.host+"/list_candidat")
  }

  load_candidat(){
    console.log(this.tokenType+' '+this.getToken())
    return this.http.get(this.host+"/load_candidat")
  }

  connexion_candidat(user){
    return this.http.post(this.host+"/login",user,{observe:'response'})
     
  }

 

  add_competence(competence){    
    return this.http.post(this.host+"/add_competence",competence)
  }

    edit_competence(competence){    
    return this.http.post(this.host+"/edit_competence",competence)
  }

  dell_competence(competence){    
    return this.http.post(this.host+"/dell_competence",competence)
  }

  add_scolarite(scolarite){    
    return this.http.post(this.host+"/add_scolarite",scolarite)
  }
  
  edit_scolarite(scolarite){    
    return this.http.post(this.host+"/edit_scolarite",scolarite)
  }

     dell_scolarite(scolarite){    
    return this.http.post(this.host+"/dell_scolarite",scolarite)
  }


  add_experience(experience){    
    return this.http.post(this.host+"/add_experience",experience)
  }
  
  edit_experience(experience){    
    return this.http.post(this.host+"/edit_experience",experience)
  }

     dell_experience(experience){    
    return this.http.post(this.host+"/dell_experience",experience)
  }

  add_loisir(loisir){    
    return this.http.post(this.host+"/add_loisir",loisir)
  }
  
  edit_loisir(loisir){    
    return this.http.post(this.host+"/edit_loisir",loisir)
  }

     dell_loisir(loisir){    
    return this.http.post(this.host+"/dell_loisir",loisir)
  }

   add_langue(langue){    
    return this.http.post(this.host+"/add_langue",langue)
  }
  
  edit_langue(langue){    
    return this.http.post(this.host+"/edit_langue",langue)
  }

     dell_langue(langue){    
    return this.http.post(this.host+"/dell_langue",langue)
  }


  list_countrie(){    
    return this.customHttpClient.get(this.host+"/list_pays")
  }


  


  
   getToken(){
    return localStorage.getItem('token');
  }


  saveToken(jwt1: string){
    localStorage.setItem('token',jwt1);
    this.jwt=jwt1;
  }

  parseJWT(){
      let jwtHelper=new JwtHelperService();
      let objJWT=jwtHelper.decodeToken(this.jwt);
      this.candidat=objJWT.sub;
      //console.log(this.candidat)
      this.roles=objJWT.roles;
  }

  loadToken(){
    
     this.jwt = localStorage.getItem('token')
    // console.log(this.jwt)
     if(this.jwt != null){
          this.parseJWT()
     }  
  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0
  }

  isCandidat(){
    return this.roles.indexOf('CANDIDAT')>=0
  }

  isAuthenticated(){
    this.loadToken()
    return this.roles
  }




  toDeconnected(){
    localStorage.removeItem('token')
    this.initParam()
  }

  initParam(){
    this.jwt=undefined;
    this.candidat=undefined
    this.roles=undefined
  }


    tokenExpired(token: string) {
      let statuttoken : Boolean
       let jwtHelper=new JwtHelperService();
       if (jwtHelper.isTokenExpired(token)) {
          console.log("Token est expirer") 
          statuttoken = true
       } else {
         console.log("Token pas expirer") 
          statuttoken = false
       }

       return statuttoken;
    }

}
