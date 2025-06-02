import { Component } from '@angular/core';

interface Ingrediente {
  nome: string;
  img: string;
  qtd: number;
}

@Component({
  selector: 'app-personalizar-sushi',
  templateUrl: './personalizar-sushi.page.html',
  styleUrls: ['./personalizar-sushi.page.scss'],
  standalone: false
})
export class PersonalizarSushiPage {
  ingredientesSushi: Ingrediente[] = [
    { nome: 'Camarão', img: 'assets/camarao.png', qtd: 0 },
    { nome: 'Atum', img: 'assets/atum.png', qtd: 10 },
    { nome: 'Arroz', img: 'assets/arroz.png', qtd: 5 },
    { nome: 'Salmão', img: 'assets/salmao.png', qtd: 5 },
  ];

  aumentar(ing: Ingrediente): void {
    ing.qtd++;
  }

  diminuir(ing: Ingrediente): void {
    if (ing.qtd > 0) ing.qtd--;
  }

  concluirSushi(): void {
    console.log('Pedido finalizado com:', this.ingredientesSushi);
  }
}
