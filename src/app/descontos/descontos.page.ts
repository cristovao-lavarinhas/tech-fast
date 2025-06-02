import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.page.html',
  styleUrls: ['./descontos.page.scss'],
  standalone: false,
})
export class DescontosPage {

  discounts: any[] = [];
  filteredDiscounts: any[] = [];
  searchText = '';
  isLoading = true;

  constructor(private http: HttpClient, private router: Router) {
    this.loadDiscounts();
  }

  loadDiscounts() {
    this.http.get<{discounts: any[]}>('assets/discounts.json').subscribe(data => {
      this.discounts = data.discounts;
      this.filteredDiscounts = this.discounts;
      this.isLoading = false;
    }, error => {
      console.error('Error loading discounts:', error);
      this.isLoading = false;
    });
  }

  onSearchChange(event: any) {
    const query = event.detail.value.toLowerCase();
    this.filteredDiscounts = this.discounts.filter(d =>
      d.title.toLowerCase().includes(query)
    );
  }

  voltar() {
    this.router.navigate(['/tabs/tab1']); // ajusta conforme a tua home
  }
  
}
