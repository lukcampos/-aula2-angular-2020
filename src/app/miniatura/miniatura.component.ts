import {Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniatura', // tag html
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.scss']
})
export class MiniaturaComponent implements OnInit {

  @Input() imagem = ""
  @Input() titulo = ""
  constructor() { }

  ngOnInit() {
  }

}
