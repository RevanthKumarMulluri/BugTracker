import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bugcreate',
  templateUrl: './bugcreate.component.html',
  styleUrls: ['./bugcreate.component.scss']
})
export class BugcreateComponent implements OnInit {
  
  selected = 'project1';
  @Output() onCloseReq = new EventEmitter<boolean>();
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onClose(show:boolean) {
      this.onCloseReq.emit(show);
  }

 
}
