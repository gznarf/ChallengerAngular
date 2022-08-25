import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(
    private formValidator : FormBuilder
  ) { }

  ngOnInit(): void { }

 datosForm = this.formValidator.group ({
  nombre: [''],
  edad: [''],
  carrera: [''],
  hobbie: ['']
 })

 onSubmit(){
  console.log(this.datosForm.value);
 }

}
