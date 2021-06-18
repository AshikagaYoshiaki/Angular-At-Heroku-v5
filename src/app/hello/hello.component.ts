import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title:string;
  message:string;
  count:number;
  input:string;
  text1:string;
  myControl:FormControl;

  constructor() {
    this.title = "";
    this.message = "";
    this.count = 0;
    this.input = "";
    this.text1 = "";
    this.myControl = new FormControl('Constructor');  
  } 

  ngOnInit(): void {
    this.title = "This is hello-app";
    this.message = "this is new component";
    this.count = 0;
    this.text1 = "";
    this.myControl = new FormControl('OnInit');    
  }

  doClick(){
    this.message = ++this.count + " times clicked";
  }

  doType(val:string){
    this.input = val;
    this.message = "You typed " + this.input;
  }


}
