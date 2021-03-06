import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images) return '../../../assets/img/noimage.png'

    if(images.length > 0) return images[0].url;
    
    return '../../../assets/img/noimage.png';
  }

}
