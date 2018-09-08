import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxStaticLoaderService } from '../services/ngx-static-loader.service';

@Pipe({
  name: 'staticLoader'
})
export class NgxStaticLoaderPipe implements PipeTransform {
  constructor(private staticContentService: NgxStaticLoaderService) {
  }
  transform(value: any, args?: any): any {
    return new Observable(observer => {
      this.staticContentService.getStaticContent().subscribe(
        (content) => {
          observer.next(this.staticContentService.getStaticContentValue(content, value.split('.')));
        },
        (error) => {
          observer.next(error);
        });
    });
  }
}
