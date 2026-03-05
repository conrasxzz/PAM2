export function createHeader(pageName){
    return `
        <ion-header>
            <ion-toolbar color="primary">
                <ion-icon name="cafe" style="margin-left: 15px; font-size: 24px;" slot="start"></ion-icon>
                <ion-title>Quero Café Bar - ${pageName}</ion-title>
            </ion-toolbar>
        </ion-header>
    `;
}