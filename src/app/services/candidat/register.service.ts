import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public host="http://localhost:8080"

  candidatserv;
  jwt: string;
  candidat : string;
  roles : Array<string>;
  tokenType: String = 'Bearer'

  constructor( private http:HttpClient) { }

  add_candidat(candidat){
    //console.log(candidat)
     return this.http.post(this.host+"/add_candidat",candidat)
  }
  edit_candidat(candidat){
    //console.log(candidat)
     return this.http.post(this.host+"/edit_candidat",candidat)
  }

  load_candidat(user){

    console.log(this.tokenType+' '+this.getToken())
  //  let header = {
  //  headers: new HttpHeaders({ 'Authorization': this.tokenType+' '+this.getToken()})
  //  }
    
    const h = new HttpHeaders()
    .append('Authorization', this.tokenType+' '+this.getToken())
    .append('Access-Control-Allow-Origin', '*');
 
    const header = { headers: h};
   

    return this.http.get(this.host+"/load_candidat",header)
  }

  connexion_candidat(user){
    //console.log(candidat)
    //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2);
    // return this.http.post(this.host+"connexion_candidat",user)
    return this.http.post(this.host+"/login",user,{observe:'response'})
     
  }


  add_competence(competence){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/add_competence",competence,headers)
  }

    edit_competence(competence){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/edit_competence",competence,headers)
  }

  dell_competence(competence){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/dell_competence",competence,headers)
  }

  add_scolarite(scolarite){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/add_scolarite",scolarite,headers)
  }
  
  edit_scolarite(scolarite){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/edit_scolarite",scolarite,headers)
  }

     dell_scolarite(scolarite){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/dell_scolarite",scolarite,headers)
  }


  add_experience(experience){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/add_experience",experience,headers)
  }
  
  edit_experience(experience){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/edit_experience",experience,headers)
  }

     dell_experience(experience){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/dell_experience",experience,headers)
  }

  add_loisir(loisir){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/add_loisir",loisir,headers)
  }
  
  edit_loisir(loisir){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/edit_loisir",loisir,headers)
  }

     dell_loisir(loisir){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/dell_loisir",loisir,headers)
  }

   add_langue(langue){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/add_langue",langue,headers)
  }
  
  edit_langue(langue){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/edit_langue",langue,headers)
  }

     dell_langue(langue){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.post(this.host+"/dell_langue",langue,headers)
  }


  list_countrie(){    
      const header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', this.tokenType+' '+this.getToken())
    .set('Access-Control-Allow-Origin', '*');
    const headers = { headers: header };
    return this.http.get(this.host+"/list_pays",headers)
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
