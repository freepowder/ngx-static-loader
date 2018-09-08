import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxStaticLoaderPipe } from './ngx-static-loader.pipe';
import { NgxStaticLoaderService } from '../services/ngx-static-loader.service';
import { NgxStaticLoaderSafeUrlPipe } from './ngx-static-loader-safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';

export const mockStaticContent = {
  DASHBOARD: {
    HOME: {
      PANEL: {
        TITLE: '<a></a>',
        CTA: 'ACTION'
      }
    }
  }
};
describe('NgxStaticLoaderSafeUrlPipe', () => {
  let pipe: NgxStaticLoaderSafeUrlPipe;
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [NgxStaticLoaderSafeUrlPipe],
        imports: [
          HttpClientTestingModule
        ],
        providers: [ DomSanitizer, NgxStaticLoaderService,  { provide: 'config', useValue: {path: ''} }]
      });
    domSanitizer = TestBed.get(DomSanitizer);
  });
  it('create an instance', inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    pipe = new NgxStaticLoaderSafeUrlPipe(service, domSanitizer);
    expect(pipe).toBeTruthy();
  }));
  it('should return the correct key', inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    pipe = new NgxStaticLoaderSafeUrlPipe(service, domSanitizer);
    pipe.transform('DASHBOARD.HOME.PANEL.CTA').subscribe((data) => {
      expect(data).toBe('ACTION');
    });
  }));
  
  it('should return the correct key', fakeAsync(inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    spyOn(service, 'getStaticContent').and.returnValue(mockStaticContent);
    pipe.transform('DASHBOARD.HOME.PANEL.CTA').subscribe((data) => {
      expect(service.getStaticContent).toHaveBeenCalled();
    });
  })));
  it('should return the correct key', fakeAsync(inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    const value = service.getStaticContentValue(mockStaticContent, ['DASHBOARD', 'HOME', 'PANEL', 'CTA']);
    expect(value).toBe('ACTION');
  })));
});


