import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SuporteFeedbackService } from '../services/suporte-feedback.service';
import emailjs from 'emailjs-com';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: false,
})

export class FeedbackPage {
  mensagem: string = '';

  constructor(
    private navCtrl: NavController,
    private svc: SuporteFeedbackService,
    private toastCtrl: ToastController
  ) {}

  voltar() {
    this.navCtrl.back();
  }

  enviarMensagem() {
    const params = {
      mensagem: this.mensagem,
      assunto: 'Mensagem de Suporte',
      remetente: 'utilizador@app.com'
    };

    emailjs.send('service_a79lfx4', 'template_wwkx8o8', params, 'o4TSqZJHLHO0UUSSi')
      .then(async () => {
        const toast = await this.toastCtrl.create({
          message: 'Mensagem enviada com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
      })
      .catch(async (error) => {
        const toast = await this.toastCtrl.create({
          message: 'Erro ao enviar mensagem.',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
        console.error('Erro EmailJS:', error);
      });
  }
}

