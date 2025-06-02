import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
  standalone: false,
})
export class NotificacoesPage {

  promo = true;
  atualizacoes = false;

  constructor(private navCtrl: NavController) {}

  voltar() {
    this.navCtrl.back();
  }

}
