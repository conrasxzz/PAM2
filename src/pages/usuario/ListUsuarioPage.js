import './ListUsuarioPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Usuário';

class ListUsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <ion-content>
                <div class="list-usuario"></div>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);

        // buscando os usuarios
        const usuarios = this.fetchUsuarios() || [];
        // renderizando os usuarios no HTML 
        this.renderUsuarios (usuarios);
    }

    fetchUsuarios() {
        return [
            { "id": 1,
                "nome": "João Silva",
                "usuario": "joao.silva",
                "senha": "********",
                "perfil": 1,
            },
            { "id": 2,
                "nome": "Maria Oliveira",
                "usuario": "maria.oliveira",
                "senha": "********",
                "perfil": 2,
            },
            { "id": 3,
                "nome": "Carlos Souza",
                "usuario": "carlos.souza",
                "senha": "********",
                "perfil": 2,
            }

        ]
    }
    renderUsuarios(usuarios){
        const container = this.querySelector(".list-usuario")

        // SE PRODUTO VAZIO, MOSTRAR MENSAGEM AO USUÁRIO
        if(usuarios.lenght == 0) {
            container.innerHTML = '<p> Nenhum Usuário encontrado </p>'
            return;
        }

        const usuarioItems = usuarios.map(usuario => `
            <ion-item>
                <ion-label>
                    <h2 style="display: flex; align-items: center; gap: 8px; " >
                    <ion-icon name="person-circle-outline"
                        name: ${usuario.nome} - perfil: ${usuario.perfil == 1 ? 'Admin' : 'Usuário'}
                        color: ${usuario.perfil == 1 ? 'danger' : 'primary'}
                        style="flex-shrink: 0;"
                        ></ion-icon>
                        <span>${usuario.usuario}</span>
                    </h2>
                </ion-label>
                <ion-buttons slot="end">
                    <ion-button fill="clear" class="btn-edit" data-id="${usuario.id}">
                        <ion-icon slot="icon-only" name="create-outline"><ion-icon>
                    </ion-button>
                    <ion-button fill="clear" color="danger" class="btn-delete" data-id="${usuario.id}">
                        <ion-icon slot="icon-only" name="trash-outline"><ion-icon>
                    </ion-button>
                </ion-buttons> 
            </ion-item>
                    
                    
         `
            ).join('');
        

            container.innerHTML = `<ion-list>${usuarioItems}</ion-list>`;
    }

}

customElements.define('list-usuario-page', ListUsuarioPage);