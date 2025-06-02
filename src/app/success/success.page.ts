import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
  standalone: false
})
export class SuccessPage {
  pedido = JSON.parse(localStorage.getItem('pedido') || '[]');
  pagamento = localStorage.getItem('pagamento') || 'MBWay';
  localizacao = localStorage.getItem('localizacao') || 'Rua das Flores, nº 10';
  hora = new Date().toLocaleTimeString();

  guardarFatura() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Fatura - Pedido FoodTech', 20, 20);

    let y = 40;
    this.pedido.forEach((item: any, index: number) => {
      doc.text(`${item.name} - €${item.price.toFixed(2)}`, 20, y);
      y += 10;
    });

    const total = this.pedido.reduce((acc: number, item: any) => acc + item.price, 0);

    y += 10;
    doc.text(`Total: €${total.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`Hora: ${this.hora}`, 20, y);
    y += 10;
    doc.text(`Tipo de Pagamento: ${this.pagamento}`, 20, y);
    y += 10;
    doc.text(`Localização: ${this.localizacao}`, 20, y);

    doc.save('fatura.pdf');
  }

  voltar() {
    // Mude para a sua rota inicial, por exemplo '/home'
    window.location.href = '/home';
  }
}

