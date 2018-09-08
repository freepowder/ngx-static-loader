import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class NgxStaticLoaderService {
  /**
   * url to json file
   */
  private STATIC_URL;

  constructor(private http: HttpClient, @Inject('config') private config) {
    this.STATIC_URL = config.path || '';
  }
  /**
   * SPA static content
   * @returns
   */
  public getStaticContent(): Observable<any> {
    return this.http.get(this.STATIC_URL).pipe(map(data => data));
  }
  /**
   * returns the value of the requested key
   * @param content
   * @param names
   * @returns
   */
  public getStaticContentValue( content: any, names: string[] ) {
    for ( let i = 0; i < names.length; i++ ) {
      content = content[ names[i] ] = content[ names[i] ] || {};
    }
    return content;
  }
}
