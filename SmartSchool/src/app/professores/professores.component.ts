import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

title = 'Professores';
  professores = [
    {id: 1, nome:'Mario', disciplina: "mat"},
    {id: 2, nome:'João', disciplina: "geo"},
    {id: 3, nome:'Guilherme', disciplina: "hist"},
    {id: 4, nome: 'Felipão', disciplina: "inf"},
    {id: 5, nome: 'Mariama', disciplina: "geo"},
    {id: 6, nome:'Aline t', disciplina: "quim"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
