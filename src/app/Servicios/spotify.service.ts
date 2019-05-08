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
      'Authorization': 'Bearer BQA39l15RYetIOvpkx5hfc-CYgGowc6eeXRtUHcAeVpUzmMimfLvoYol_j7tsS2CEYuo7iO4Wh1cSwHaqQY'
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

    return this.getQuery(`artists/${ id }`)
      .pipe( map( data =>data['artists'].items ) )

  }
}
