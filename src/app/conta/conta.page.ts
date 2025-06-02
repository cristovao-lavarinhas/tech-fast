import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
  standalone: false,
})
export class ContaPage {

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tabs/tab1']); // ajusta conforme a tua home
  }

  navegar(destino: string) {
    this.router.navigate(['/conta/' + destino]);
  }
}
