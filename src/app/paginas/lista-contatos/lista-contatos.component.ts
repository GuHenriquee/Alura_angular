import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import agenda from '../../agenda.json'
interface Contato{
    id:number
    nome: string
    telefone:string
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, 
      ContainerComponent, 
      CabecalhoComponent, 
      SeparadorComponent,
      ContatoComponent,
      FormsModule],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
    alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
    contatos: Contato[] = agenda;
  
    filtroPorTexto:string = ''
  
    filtraContatosPorTexto():Contato[]{
      if(!this.filtroPorTexto){
          return this.contatos
      }
      return this.contatos.filter (contato =>{
          return contato.nome.toLocaleLowerCase().includes(this.filtroPorTexto.toLocaleLowerCase())        
      })
    }
  
    filtrarContatosPorLetraInicial(letra:string): Contato[]{
      return this.filtraContatosPorTexto().filter(contato =>{
          return contato.nome.toLocaleLowerCase().startsWith(letra)
      })
    }
  }
  

