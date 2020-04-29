import { Component } from '@angular/core';
import { Customer } from './customer';
import { TransactionData }  from './transaction-data';
import { FbUser }  from './fb-user';

@Component({
  selector: 'app-root',
//templateUrl: './app.component.firstPage.html',//
templateUrl: './app.component.first.html',
//templateUrl: './app.component.directive.html',

 
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  firstName : String = "kiran";
  topicHasError : boolean = true;

  validateTopic(value)
  {
    if(value == '' || value == null )
    {
      console.log('inside if..');
      this.topicHasError = true;
    }
    else{
      console.log('inside else..');
      this.topicHasError = false;
    }
  }
  userModel = new FbUser('Kirankumar','Kiran@gmail.com',9090909,'','Morning',true);

  topicArr:any = [ 'Angular', 'Node','Express','JS']
  title = 'Google-Pay';
  firstname : String = 'Ankita';
  lastname : String = 'Palekar';
  today: number = Date.now();
  lable:any='friend';
  showTransaction:boolean= true;
  showOffersFlag : boolean = false;
  showBankFlag : boolean = false;
  userData : any;
  inviteFriendFlag : boolean = false;
  showFriend:boolean= true;
  queryString : String = 'Search';
  msg : String;
  transactionCriteria1 : any = [ "tName" , "tStatus"];
  
  tranactionSearchQuery : String;

  cources : any = [ "Java" , "Angular","Mean Stack"];

  countryDropdown : any = [ 
    'India',
    'Australia',
    'America',
    'Britain',
    'Great Britain',
    'Dublin',
    'Ireland',
    'SouthAfrica',
    'SriLanka',
    'Europe'

  ] ;

  todaysdate1 : any;
  
  fullImagePath : String = "";
  
  inviteFriend()
  {

    if(this.inviteFriendFlag == true)
    {
      this.inviteFriendFlag = false;
    }
    else
    {
      this.inviteFriendFlag = true;
    } 
  }
  showFriendList() {
    if(this.showFriend == true)
    {
      this.showFriend = false;
    }
    else
    {
      this.showFriend = true;
    } 
  }
    

  showTransactionList()
  {
    if(this.showTransaction == true)
    {
      this.showTransaction = false;
    }
    else
    {
      this.showTransaction = true;
    } 
  }

  showOffers()
  {
    if(this.showOffersFlag == true)
    {
      this.showOffersFlag = false;
    }
    else
    {
      this.showOffersFlag = true;
    } 
  }

  showBankTransaction()
  {
    if(this.showBankFlag == true)
    {
      this.showBankFlag = false;
    }
    else
    {
      this.showBankFlag = true;
    } 
  }
  offer1 : String;
  offer2 : String;
  offer3 : String;

  bankTransaction : TransactionData[]  = [];
  constructor()
  {
    this.fullImagePath = '/assets/images/Googlepay.jpg';
    this.offer1 =  '/assets/images/offer1.PNG';
   this.offer2 =  '/assets/images/offer2.PNG';
    this.offer3 =  '/assets/images/offer3.PNG';
    this.userData =  [
      new Customer('Akshay','Deshmkh','adc@gmail.com'),
      new Customer('Kiran','Gawali','kira@gmail.com'),
      new Customer('Jay','Malhotra','jay@gmail.com'),
      new Customer('John','Jerry','jerry@gmail.com'),
     ];
   // this.todaysdate = new Date();
     
   /* let currentDate = new Date();
      this.todaysdate =currentDate.toDateString() +' ' + currentDate.toLocaleTimeString(); */

      // asynchronous data binding 

  setInterval ( () =>{
    let currentDate = new Date();
    this.todaysdate1 =currentDate.toDateString() +' ' + currentDate.toLocaleTimeString();     
   } , 1000 ); 
  }


  ngOnChanges()
  {
    
  }
 
  ngOnInit()
  {

    this.bankTransaction.push(new TransactionData ('Shahrukh','Fail',6000,'/assets/images/srk1.PNG'));
      this.bankTransaction.push(new TransactionData ('Shahrukh','Success',8000,'/assets/images/srk1.PNG'));
 
    this.bankTransaction.push(new TransactionData ('Dipika','Success',9000,'/assets/images/dip1.PNG'));
    this.bankTransaction.push(new TransactionData ('Ranbir','Success',5000,'/assets/images/ranbir1.jpg'));
 
 
     this.bankTransaction.push(new TransactionData ('Katrina','Success',7000,'/assets/images/kat1.jpg'));

    
    this.bankTransaction.push(new TransactionData ('Shahrukh','Fail',8000,'/assets/images/srk1.PNG'));
    this.bankTransaction.push(new TransactionData ('Dipika','Fail',1000,'/assets/images/dip1.PNG'));  
    
    
    this.bankTransaction.push(new TransactionData ('Ranbir','Success',5000,'/assets/images/ranbir1.jpg'));
    this.bankTransaction.push(new TransactionData ('Katrina','Success',5000,'/assets/images/kat1.jpg'));


    this.bankTransaction.push(new TransactionData ('Shahrukh','Fail',5000,'/assets/images/srk1.PNG'));
    this.bankTransaction.push(new TransactionData ('Dipika','Success',7000,'/assets/images/dip1.PNG'));
    this.bankTransaction.push(new TransactionData ('Ranbir','Success',6000,'/assets/images/ranbir1.jpg'));
    this.bankTransaction.push(new TransactionData ('Katrina','Success',7000,'/assets/images/kat1.jpg'));  


  }
}
