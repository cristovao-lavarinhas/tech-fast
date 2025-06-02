import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Loja {
  nome: string;
  imagem: string;
  classificacao: number;
  duracao: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})

export class Tab2Page implements OnInit {

  lojas: Loja[] = [];
  lojasFiltradas: Loja[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  voltarParaHome() {
    this.router.navigate(['/tabs/tab1']); // ou o path da tua home
  }

  ngOnInit() {
    this.http.get<Loja[]>('assets/lojas.json').subscribe(data => {
      this.lojas = data;
      this.lojasFiltradas = data;
    });
  }

  filtrar(event: any) {
    const query = event.detail.value.toLowerCase();
    this.lojasFiltradas = this.lojas.filter(loja =>
      loja.nome.toLowerCase().includes(query)
    );
  }

}
