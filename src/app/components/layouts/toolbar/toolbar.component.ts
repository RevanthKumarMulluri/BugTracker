import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  show : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal($event){
    this.show=$event;
  }

}
