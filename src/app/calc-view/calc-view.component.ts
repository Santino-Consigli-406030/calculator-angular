import { Component } from '@angular/core';
import { CalcActionsComponent } from '../calc-actions/calc-actions.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent,FormsModule],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {

  
  result : number=0;
  numberOneToClear : string ="";
  numberTwoToClear : string ="";
  handleNumberEmitted(value: number): void {
  
    this.result=value
  }
  limpiarCampos():void {
   this.result=0
   this.numberOneToClear=""
   this.numberTwoToClear=""
   
  }
  numberOneToCalculate: number =0;
  numberTwoToCalculate: number = 0;
  NumberOneInput(event: Event) 
  {
    this.numberOneToCalculate = +(event.target as HTMLInputElement).value;
  }
  NumberTwoInput(event: Event) {
    this.numberTwoToCalculate = +(event.target as HTMLInputElement).value;
  }

}
