import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  addHobby  = function(hf){
    console.log("Hobby captured!")
    console.log(hf)
  }

  constructor() { }

  ngOnInit() {
  }

}
