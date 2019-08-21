import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {


    public num1: any;
    public num2: any;
    public result: any;

    addition(){
      this.result = this.num1 + this.num2;
    }
    rest(){
      this.result = this.num1 - this.num2;
    }
    mult(){
      this.result = this.num1 * this.num2;
    }
    mod(){
      this.result = this.num1 % this.num2;
    }
    div(){
      if (this.num2 === 0){
          alert("No se puede dividir por 0");
          this.num2 =''
      }else{
        this.result = (this.num1) / (this.num2);
      }
      
    }
    clear(){
      this.num1 = ''
      this.num2 = ''
      this.result ='' 
    }


  ngOnInit() {
  }

}
