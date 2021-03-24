import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  private getByQuery(query:string):Observable<any>{
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization':'Bearer BQD4k2luFT2m0Ky93-GqKKkzN83gMPr4SryCVhMEpjw2WsBOIhFgoNGciK_CY-n1q0F8iYJN4e7NjBR5WLg'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, {headers});
  }

  public getReleases():Observable<any>{
     return this.getByQuery('browse/new-releases?country=DO&limit=20&offset=0')
    .pipe(map(data => data['albums'].items));
  }

  public getArtists(value:string):Observable<any>{
     return this.getByQuery(`search?q=${value}&type=artist&limit=20&offset=0`)
     .pipe(map(data => data['artists'].items))
  }

  public getArtist(id:string):Observable<any>{
    return this.getByQuery(`artists/${id}`);
  }

  public getTopTracks(id:string){
    return this.getByQuery(`artists/${id}/top-tracks?market=DO`)
    .pipe(map(data => data['tracks']));
  }
}
