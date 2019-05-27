import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/Servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevascanciones : any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;
  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error =  false;

    this.spotify.getNewService()
      .subscribe( (data : any ) =>{
        this.nuevascanciones = data;
        this.loading = false;
      }, (errorServicio) =>{

        this.loading = false;
        this.error =  true;
        this.mensaje = errorServicio.error.error.message;
      })
  }

}
