import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getPatient(){
    return this.http.get("http://localhost:9090/PatientDetails");
  }
}
