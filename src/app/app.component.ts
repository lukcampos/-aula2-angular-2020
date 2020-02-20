import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'segundaAulaAngular2020';
  images: Array<any> = [
    {
      url:"./assets/img/imagem1.jpg",
      titulo: "Tela",
      ativa:true
    },{
      url:"./assets/img/imagem2.jpg",
      titulo: "Packman",
      ativa:true
    },{
      url:"./assets/img/imagem3.jpg",
      titulo: "Porche",
      ativa:true
    }
  ]

  // função para deletar imagem
  deletar(index:string){
      this.images[index].ativa = false;
  }

  // função para adicionar imagem1
  novaImagem(){
    let objetoImagem = {
      titulo: "Imagem aleatória",
      url: "https://loremflickr.com/320/240?data="+new Date().getTime(),
      ativa:true
    }

    //adicionar imagem ao array
    this.images.push(objetoImagem)
  }




}
