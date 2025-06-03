import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.page.html',
  styleUrls: ['./pontos.page.scss'],
  standalone: false,
})
export class PontosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pontos = 120; // exemplo de pontos atuais do utilizador

  ofertas = [
    {
      title: 'Pizza Margherita',
      pontos: 100,
      image: 'assets/ofertas/pizza.jpg'
    },
    {
      title: 'Café grátis',
      pontos: 30,
      image: 'assets/ofertas/cafe.jpg'
    }
  ];
}
