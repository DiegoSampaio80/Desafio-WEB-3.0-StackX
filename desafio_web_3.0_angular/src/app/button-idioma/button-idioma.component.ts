import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'button-idioma',
    template: `
                <button>
                    <img src="{{bandeira}}" width='15px' alt=""> 
                    {{idioma}}
                </button>
            `
})
export class ButtonIdiomaComponent implements OnInit {
    @Input() idioma: any;
    @Input() bandeira: any;
    
     constructor(){}

   ngOnInit() {}
}