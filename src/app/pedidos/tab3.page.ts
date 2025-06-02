import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() {}
  pedidos = [
    {
      id: 1,
      nome: 'Hambúrguer Clássico',
      preco: 7.5,
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1920px-RedDot_Burger.jpg',
      quantidade: 1
    },
    {
      id: 2,
      nome: 'Pizza Margherita',
      preco: 8.9,
      imagem: 'https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg',
      quantidade: 1
    },
    // Adicione mais dinamicamente
  ];

  aumentar(item: any) {
    item.quantidade++;
  }

  diminuir(item: any) {
    if (item.quantidade > 1) {
      item.quantidade--;
    }
  }
}

