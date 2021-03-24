import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input()items:any[] = []
  private artistId:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showArtist(item:any){
      if(item['type']==='album')  this.artistId = item['artists'][0].id;
      else this.artistId = item['id'];
      console.log(this.artistId);
    this.router.navigate(['/artist', this.artistId]);
  }
}
