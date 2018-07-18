import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
   result:any="";
   number1:number=0;
   number2:number=0;
   op:any=0;
   total:any="";
  

   
     
  

  constructor(public navCtrl: NavController) {

  }
   numberclick(btn) {
       
            
        if ((btn == '0') && (this.result.length=='0')) {
            this.result= "";
            btn="";
        }
        if((btn=='+') || (btn=='-') || (btn=='*') || (btn=='/') ){
            this.number1=this.result;
            this.op=btn;
            this.result="";
            btn="";


        }
       
        if (btn == 'C') {
            this.result= "";
            
        }
            else if (btn == '=') {
                
                    this.number2=this.result;
                    this.result=this.number1+this.op+this.number2;
                    
                
                
                

                this.result = eval(this.result);
            }
 
            else {
                this.result += btn;
            }
    }

   
  


}
