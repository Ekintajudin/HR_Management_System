import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const basestaffUrl = "http://localhost:8080/staff"
const createstaffUrl = "http://localhost:8080/staff/add"
const delstaffUrl = "http://localhost:8080/staff/del"
const putstaffUrl = "http://localhost:8080/staff/put"

const baseclaimUrl = "http://localhost:8080/claim"
const createclaimUrl = "http://localhost:8080/claim/add"
const delclaimUrl = "http://localhost:8080/claim/del"
const putclaimUrl = "http://localhost:8080/claim/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllstaff():Observable<any>{
  const url = "http://localhost:8080/allstaff"
  return this._http.get<any>(url)
}

//get all 
getAllclaim():Observable<any>{
  const url = "http://localhost:8080/allclaim"
  return this._http.get<any>(url)
}

 // create
 createstaff(staff: any):Observable<any>{
  console.log(staff,'createapi=>');
  return this._http.post(createstaffUrl, staff)
}

 // create
 createclaim(claim: any):Observable<any>{
  console.log(claim,'createapi=>');
  return this._http.post(createclaimUrl, claim)
}

//deleting 

deletestaff(id: any): Observable<any> {
  return this._http.delete(`${delstaffUrl}/${id}`);

}

//deleting 

deleteclaim(id: any): Observable<any> {
  return this._http.delete(`${delclaimUrl}/${id}`);

}

//update 
updatestaff(id: any, staff: any): Observable<any> {
  return this._http.put(`${putstaffUrl}/${id}`, staff);

}

//update 
updateclaim(id: any, claim: any): Observable<any> {
  return this._http.put(`${putclaimUrl}/${id}`, claim);

}

//get one 
getOnestaff(id:any):Observable<any>{
  return this._http.get(`${basestaffUrl}/${id}`);
}

//get one 
getOneclaim(id:any):Observable<any>{
  return this._http.get(`${baseclaimUrl}/${id}`);
}
}

