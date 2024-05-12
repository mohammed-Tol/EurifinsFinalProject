import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from '../model/Enquiry';

@Injectable({
  providedIn: 'root'
})
export class ManagerapiService {

  constructor(private http:HttpClient) { }
  url="http://localhost:5005/api/Mail";
  getEnquiry(id:number):Observable<Enquiry>{
    return this.http.get<Enquiry>(`${this.url}/EnquiryDetails?id=${id}`)
  }
}
