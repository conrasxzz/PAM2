import './LoginPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Login';

class LoginPage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}
            <div class="container">
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Acessar</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>

                        <ion-item>
                            <ion-icon slot="start" name="person"></ion-icon>
                            <ion-input type="text" id="usuario" placeholder="Usuário"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-icon slot="start" name="lock-closed"></ion-icon>
                            <ion-input type="password" id="senha" placeholder="Senha"></ion-input>
                        </ion-item>

                        <ion-button expand="block" id="login" class="ion-margin-top">Entrar</ion-button>
                    </ion-card-content>
                </ion-card>
            </div>
        `;
    }
} 

customElements.define('login-page', LoginPage);