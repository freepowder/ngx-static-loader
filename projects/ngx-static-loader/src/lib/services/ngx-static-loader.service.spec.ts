import { TestBed, inject, async } from '@angular/core/testing';

import { NgxStaticLoaderService } from './ngx-static-loader.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NgxStaticLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxStaticLoaderService, { provide: 'config', useValue: {path: 'assets/static/static-content.json'} }]
    });
  });

  it('should be created', inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    expect(service).toBeTruthy();
  }));
  it('should have getStaticContent method',
    inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
      expect(service.getStaticContent).toBeDefined();
    }));
  it('should getStaticContent expect GET with URL assets/static/static-content.json' ,
    async(inject([NgxStaticLoaderService, HttpTestingController],
      (service: NgxStaticLoaderService, backend: HttpTestingController) => {
        service.getStaticContent().subscribe();
        backend.expectOne({
          url: 'assets/static/static-content.json',
          method: 'GET'
        });
      })));
});
