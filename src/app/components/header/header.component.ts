import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() Titulo:string='';
  //[Titulo]=" variableEnviar " //colocar en el html del padre

  constructor() { }

  ngOnInit() {}

}
