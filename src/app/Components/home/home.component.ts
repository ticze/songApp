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

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewService()
      .subscribe( (data : any ) =>{
        this.nuevascanciones = data;
        this.loading = false;
      })
  }

}
