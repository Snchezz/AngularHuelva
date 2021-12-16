import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public personas: Array<any> = []

  ngOnInit(): void {
  }

  constructor(
    private personaService: PersonaService
  ) {

    this.personaService.getPersonas().subscribe((resp: any) => {
      this.personas = resp
    })

    document.title = "Huelva - Biblioteca";

  }

}
