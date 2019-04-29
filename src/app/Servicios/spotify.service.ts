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
      'Authorization': 'Bearer BQAL3PEh-dHjCsS_36UGKpTiAqGf0b7OhGPywKTNnUOIV64nD3iAP0LjHk0qoqM6yG9iUiDiN0jhST-AElw'
    });

    return this.http.get( url , { headers });
  }

  getNewService(){

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ) );

  }

  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data =>data['artists'].items ) )

  }
}
