import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {


 nafarat: string[]=['سارا','مهشید','زهرا','ندا', 'عاطفه'];
 
  constructor() { }

  ngOnInit(): void {

    
  }

}
