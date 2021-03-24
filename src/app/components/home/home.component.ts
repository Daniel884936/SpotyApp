import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  loading:boolean;
  newRealeases:any[];
  error:boolean;
  errorMessage:string;

  constructor(private spotifyService:SpotifyService){

    this.error = false;
    this.loading = true;

    spotifyService.getReleases().subscribe((data:any)=>{
     this.newRealeases = data;
     this.loading = false;

    }, (serviceError=>{
      this.loading = false;
      this.error = true;
      console.log(serviceError);
      this.errorMessage = serviceError.error.error.message;
    }));
  }
  ngOnInit(): void {
  }

}
