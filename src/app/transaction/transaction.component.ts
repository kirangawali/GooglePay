import { Component, OnInit, Input } from '@angular/core';
import { TransactionData } from '../transaction-data';
 
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  offer1 : String;
  offer2 : String;
  offer3 : String;
/*
  @Input()tName : String;
  @Input()tMoney : Number;
*/
  @Input()transData : TransactionData;
  constructor() {
    this.offer1 =  '/assets/images/srk1.PNG';
    this.offer2 =  '/assets/images/offer2.PNG';
    this.offer3 =  '/assets/images/offer3.PNG';
   }

  ngOnInit() {
  }

}
