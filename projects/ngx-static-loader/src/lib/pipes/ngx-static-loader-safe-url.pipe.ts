import { Pipe, PipeTransform } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NgxStaticLoaderService } from '../services/ngx-static-loader.service';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'staticLoaderSafeUrl'
})
export class NgxStaticLoaderSafeUrlPipe implements PipeTransform {
  constructor(private staticContentService: NgxStaticLoaderService, private domSanitizer: DomSanitizer) {
  }
  transform(value: any, args?: any): any {
    return new Observable(observer => {
      this.staticContentService.getStaticContent().subscribe(
        (content) => {
          observer.next(
            this.domSanitizer
              .bypassSecurityTrustResourceUrl(
                this.staticContentService.getStaticContentValue(content, value.split('.'))));
        },
        (error) => {
          console.log('The path provided is not valid');
          observer.next(error);
        });
    });
  }
}
