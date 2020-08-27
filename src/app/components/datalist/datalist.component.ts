import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {

  @Input() projects: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
