import './EditProdutoPage.css'
import { createHeader } from '../../shared/Header.js'
import { logout } from '../../shared/util.js';

const pageName = 'Editar Produto';

class EditProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
                 <ion-content class="ion-padding">
                <form id="form-produto">
                    <ion-list>
                        <ion-item>
                            <ion-label position="stacked">Descrição do Produto</ion-label>
                                <ion-input type="text" name="dsc_produto" value="Feijoada"></ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Valor Unitário</ion-label>
                                <ion-input type="number" step="0.01" name="valor_unit" value="33.99"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>Inativo</ion-label>
                            <ion-toggle slot="end" name="status" checked></ion-toggle>
                        </ion-item>
                    </ion-list>
                    <div class="ion-padding">
                        <ion-button expand="block" type="submit" class="ion-margin-top">
                        confirmar alteração
                        </ion-button>
                        <ion-button expand="block" color="danger" id="btn-cancelar">
                        Cancelar
                        </ion-button>

                    </div>                    

                </form>
            </ion-content>
        `;
        this.querySelector('#logout-btn')
        .addEventListener('click', logout);
    }
}

customElements.define('edit-produto-page', EditProdutoPage);