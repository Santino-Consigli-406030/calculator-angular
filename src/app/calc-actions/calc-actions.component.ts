import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {


    @Input() numberOne: number=0;
    @Input() numberTwo: number=0;

    @Output() numberEmitted = new EventEmitter<number>();
    @Output() limpiarCampos = new EventEmitter<void>();
    result: number = 0;
    multiplication(): void {
      this.result = this.numberOne * this.numberTwo;
      this.emitNumber();
  }

  division(): void {
      this.result = this.numberOne / this.numberTwo;
      this.emitNumber();
  }

  addition(): void {
      this.result = this.numberOne + this.numberTwo;
      this.emitNumber();
  }

  rest(): void {
      this.result = this.numberOne - this.numberTwo;
      this.emitNumber();
  }

  potencia(): void {
      this.result = Math.pow(this.numberOne, this.numberTwo);
      this.emitNumber();
  }
  //por alguna razon property blinding no funcionaba para setear los valores de los input.
  borrarTodo(): void {
    console.log('el emit del limpiar campos funka');
      this.limpiarCampos.emit();
  }

  private emitNumber(): void {
      this.numberEmitted.emit(this.result);
  }

}
