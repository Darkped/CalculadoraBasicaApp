import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numberA;
  numberB;
  typeOfAction;
  result;

  constructor(public navCtrl: NavController) {

  }
  performFunction(type){
    var a = parseInt(this.numberA);
    var b = parseInt(this.numberB);
    console.log(type);

    if( type == 's'){
      this.typeOfAction = "Suma"
      this.result = a+b
    }else if(type == 'r'){
      this.typeOfAction = "Resta"
      this.result = a - b;
    }else if(type == 'm'){
      this.typeOfAction = "Multiplicacion"
      this.result = a *b
    }else if(type == 'd'){
      this.typeOfAction = "Division"
      this.result = a/b
    }

  }


}
