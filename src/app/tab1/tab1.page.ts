import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
tasksList=[{
  nome: 'task1',
  descrizione: 'lorenipsum',
  completed: true,

},
{
  nome: 'task2',
  descrizione: 'lorenipsum',
  completed: false,

},
{
  nome: 'task3',
  descrizione: 'lorenipsum',
  completed: true,

},
{
  nome: 'task4',
  descrizione: 'lorenipsum',
  completed: false,

},
{
  nome: 'task5',
  descrizione: 'lorenipsum',
  completed: true,

},{
  nome: 'task6',
  descrizione: 'lorenipsum',
  completed: false,

},{
  nome: 'task7',
  descrizione: 'lorenipsum',
  completed: true,

},
{
  nome: 'task8',
  descrizione: 'lorenipsum',
  completed: false,

},
{
  nome: 'task9',
  descrizione: 'lorenipsum',
  completed: true,

},
{
  nome: 'task10',
  descrizione: 'lorenipsum',
  completed: false,

}]
  constructor() {}

}
