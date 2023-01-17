import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Desafio Web 3.0 Angular';
  frase: string = 'Frase em português';
  idioma: string = 'Português';
  bandeira: any = '';
  tecnologias: any = ['PHP', 'AngularJS'];
  alterarIdioma(texto: string){
    this.frase = texto
  }
}
