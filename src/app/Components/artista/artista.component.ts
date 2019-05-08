import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/Servicios/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  constructor( private router: ActivatedRoute ,
                private spotify: SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
    } );

  }

  getArtista( id: string ){

    this.spotify.getArtista( id )
          .subscribe( artista => {
            console.log(artista);
          } )

  }

}
