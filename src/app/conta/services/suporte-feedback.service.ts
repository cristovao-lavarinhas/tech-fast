import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Mensagem {
  tipo: 'suporte' | 'feedback';
  conteudo: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuporteFeedbackService {
  private storageReady = false;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.storageReady = true;
  }

  async guardarMensagem(tipo: 'suporte' | 'feedback', conteudo: string) {
    if (!this.storageReady) return;

    const mensagens: Mensagem[] = await this.storage.get('mensagens') || [];

    mensagens.push({
      tipo,
      conteudo,
      data: new Date().toISOString()
    });

    await this.storage.set('mensagens', mensagens);
  }

  async exportarJSON(): Promise<string> {
    const mensagens: Mensagem[] = await this.storage.get('mensagens') || [];
    return JSON.stringify(mensagens, null, 2);
  }
}
