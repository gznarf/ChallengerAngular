import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public fruits: Array<any> = [
    { title: "Banana", color: "Yellow" },
    { title: "Apple", color: "Red" },
    { title: "Guava", color: "Green" },
    { title: "Strawberry", color: "Red" }
  ];

  public datosAlumnos: Array<any> = 
    [
      {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingenierías",
        hobbie: "Futbol"
      },
      {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitecturas",
        hobbie: "Bajo Eléctrico"
      },
      {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
      },
      {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomia"
      }
    ]

}
