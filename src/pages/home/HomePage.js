import './HomePage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'Home';

class HomePage extends HTMLElement{

    connectedCallback() {
        const cabecalho = createHeader(pageName);
        this.classList.add('ion-page');
        this.innerHTML = `
            ${cabecalho}

        `;
    }
} 

customElements.define('home-page', HomePage);