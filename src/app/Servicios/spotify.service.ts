import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD6QWr2ruVWS4K-_h0aItSE6mEAJ4tHD5rSrynJtso5H_UG3-_9wyExUJhWiiWJbRX8TrzedoejuXopJDc'
    });

    return this.http.get( url , { headers });
  }

  getNewService(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ) );

  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data =>data['artists'].items ) )

  }

  getArtista( id: string ){

    return this.getQuery(`artists/${ id }`);
      // .pipe( map( data =>data['artists'].items ) )

  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe( map( data =>data['tracks'] ) )

  }
}
