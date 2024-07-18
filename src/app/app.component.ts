import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule,MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Juegos-digitales';
  estaJugando :boolean;
  departamento: string = ""
  constructor() {
    this.estaJugando = false
  }

  activarJuego(departamento: string){
    this.estaJugando = true;
    this.departamento = departamento;
    console.log(this.estaJugando)
    console.log(this.departamento)
  }

  volverAlMenu(){
    this.estaJugando = false;
  }
}
