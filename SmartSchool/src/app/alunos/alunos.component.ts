import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = 'Alunos';
alunoSelected: string;

  alunos = [
    {id: 1, nome:'Marta', sobrenome: 'paula', telefone:123},
    {id: 2,nome:'Pedro', sobrenome: 'rangel', telefone:222},
    {id: 3,nome:'José',sobrenome: 'pimenta', telefone:111},
    {id: 4,nome: 'Felipe', sobrenome: 'arqula', telefone:2223},
    {id: 5,nome: 'Maria', sobrenome: 'cofig', telefone: 2000},
    {id: 6,nome:'Aline', sobrenome: 'artur', telefone:234},
  ];

alunoSelect(aluno: any){
this.alunoSelected = aluno.nome;
}
voltar(){
this.alunoSelected='';
}
  constructor() { }

  ngOnInit(): void {
  }

}

