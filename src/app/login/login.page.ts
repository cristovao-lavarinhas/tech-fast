import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../../../tech-fast-main/src/app/services/storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    private alertController: AlertController,
    private storageService: StorageService,
    private router: Router,) {}

  async login() {
    const dadosGuardados = localStorage.getItem('utilizador_registado');

    if (!dadosGuardados) {
      this.mostrarAlerta('Nenhuma conta registada encontrada.');
      return;
    }

    const user = await this.storageService.get('utilizador_registado');

    if (this.email === user.email && this.password === user.password) {
      await this.mostrarAlerta('Login feito com sucesso!');
      this.router.navigate(['/home']);
    } else {
      this.mostrarAlerta('Email ou password incorretos.');
    }
  }

  async mostrarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensagem,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  loginComApple() {
    const userApple = {
      nome: 'Apple User',
      email: 'appleuser@icloud.com',
      password: 'apple123'
    };

    localStorage.setItem('utilizador_registado', JSON.stringify(userApple));
    this.mostrarAlerta('Login com Apple efetuado com sucesso!');
  }

  loginComGoogle() {
    const userGoogle = {
      nome: 'Google User',
      email: 'googleuser@gmail.com',
      password: 'google123'
    };

    localStorage.setItem('utilizador_registado', JSON.stringify(userGoogle));
    this.mostrarAlerta('Login com Google efetuado com sucesso!');
  }

}
