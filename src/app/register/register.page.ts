import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../../../tech-fast-main/src/app/services/storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  nome = '';
  email = '';
  password = '';
  confirmarPassword = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private storageService: StorageService,
    ) {}

  async registarConta() {
    if (!this.nome || !this.email || !this.password || !this.confirmarPassword) {
      this.mostrarAlerta('Todos os campos são obrigatórios.');
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.mostrarAlerta('As passwords não coincidem.');
      return;
    }

    const novoUtilizador = {
      nome: this.nome,
      email: this.email,
      password: this.password,
    };


    await this.storageService.set('utilizador_registado', novoUtilizador);

    await this.mostrarAlerta('Conta registada com sucesso!');
    this.router.navigateByUrl('/login');
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

  async registarComApple() {
    const appleUser = {
      nome: 'Apple User',
      email: 'appleuser@icloud.com',
      password: 'apple123'
    };

    await this.storageService.set('utilizador_registado', appleUser);
    await this.mostrarAlerta('Registado com Apple!');
    this.router.navigateByUrl('/login');
  }

  async registarComGoogle() {
    const googleUser = {
      nome: 'Google User',
      email: 'googleuser@gmail.com',
      password: 'google123'
    };

    await this.storageService.set('utilizador_registado', googleUser);
    await this.mostrarAlerta('Registado com Google!');
    this.router.navigateByUrl('/login');
  }

}

