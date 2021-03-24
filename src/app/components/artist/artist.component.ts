import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  public topTracks:any[] = [];
  public artist: any = {};
  public loading:boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {

     this.activatedRoute.params.subscribe(params=>{
       const idArtist:string  = params['id'];
       this.loading = true;

       this.getArtist(idArtist);
       this.getTopTracks(idArtist);
    })
   }

  ngOnInit(): void {
  }

  private getArtist(id:string){
      this.spotifyService.getArtist(id).subscribe((artist:any)=>{
        this.artist = artist;
    });
  }

  private getTopTracks(id:string){

    this.spotifyService.getTopTracks(id).subscribe((topTracks:any)=>{
      this.topTracks = topTracks;
      console.log(this.topTracks)
      this.loading = false;
    });
  }
}
