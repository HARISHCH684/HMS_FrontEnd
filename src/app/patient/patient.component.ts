import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:any;

  constructor(private service:PatientService) { }

  ngOnInit(): void {
  }
  button(){
    this.patients=this.service.getPatient().subscribe(data=>this.patients=data);
  }

}
