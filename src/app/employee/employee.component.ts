import { Component, OnInit } from '@angular/core';
import { EmployeModel } from "../modele/EmployeModel.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  listEmployees: EmployeModel[] = [{
      name:"jean",
      lastname: "gabin",
      information: "insertion pro",
      image:"/assets/images/avatar-1.jpeg"
  },
    {name: "françois", lastname: "dupont", information:"viens darriver",image:"/assets/images/avatar-1.jpeg" },
    {name: "françois", lastname: "dupont", information:"viens darriver",image:"/assets/images/avatar-1.jpeg" },
    {name: "françois", lastname: "dupont", information:"viens darriver",image:"/assets/images/avatar-1.jpeg" }]

  constructor() { }

  ngOnInit(): void {

  }

}
