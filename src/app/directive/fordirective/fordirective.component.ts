import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  friends:string[]=['anjan','kiran','ankit']

  locations =[
    {
      city : "chennai",
      code : "044"
    },
    {
      city : "bangalore",
      code : "080"
    }
  ]

  display:boolean = false

  check ="Madhu"

  salary = 88888

  birthday = new Date()

  scores =[16,98,66,34,12,66,99]

  constructor() { }

  ngOnInit() {
  }

}
