import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quehacer',
  templateUrl: './quehacer.component.html',
  styleUrls: ['./quehacer.component.css']
})
export class QuehacerComponent implements OnInit {

  constructor() { 
    document.title = "Huelva - ¿Que hacer en Huelva?";

  }

  ngOnInit(): void {
  }

}
