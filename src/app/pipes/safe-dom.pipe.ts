import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {
  constructor(private domSanitazer: DomSanitizer){}

  transform(value: string, url:string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
