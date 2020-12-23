import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product;//define a property named product with an @Input() decorator. 

  
  @Output() notify = new EventEmitter(); //define a property named notify with an @Output() decorator and an instance of EventEmitter(). 

  constructor() { }

  ngOnInit() {
  }

}