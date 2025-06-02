import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: false
})
export class CarrinhoPage implements OnInit {

  cartItems: CartItem[] = [
    {
      name: 'Pizza Margherita',
      description: 'Queijo, tomate e manjericão',
      price: 8.99,
      image: 'assets/placeholder.jpg'
    },
    {
      name: 'Hambúrguer',
      description: 'Carne, queijo, alface e molho',
      price: 6.50,
      image: 'assets/placeholder.jpg'
    }
  ];

  couponCode: string = '';
  discount: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  applyCoupon(): void {
    if (this.couponCode.toLowerCase() === 'desconto10') {
      this.discount = this.total * 0.10;
      alert('Cupão aplicado: 10% de desconto!');
    } else {
      this.discount = 0;
      alert('Cupão inválido.');
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

  checkout(): void {
    alert('Pedido confirmado com sucesso!');
    this.router.navigate(['/success']);
  }
}

