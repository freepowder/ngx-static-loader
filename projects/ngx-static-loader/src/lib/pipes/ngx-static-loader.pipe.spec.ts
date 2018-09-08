import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxStaticLoaderPipe } from './ngx-static-loader.pipe';
import { NgxStaticLoaderService } from '../services/ngx-static-loader.service';

export const mockStaticContent = {
  DASHBOARD: {
    HOME: {
      PANEL: {
        TITLE: 'DASHBOARD',
        CTA: 'ACTION'
      }
    }
  }
};
describe('NgxStaticLoaderPipe', () => {
  let pipe: NgxStaticLoaderPipe;
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [NgxStaticLoaderPipe],
        imports: [
          HttpClientTestingModule
        ],
        providers: [ NgxStaticLoaderService,  { provide: 'config', useValue: {path: ''} }]
      });
  });
  it('create an instance', inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    pipe = new NgxStaticLoaderPipe(service);
    expect(pipe).toBeTruthy();
  }));
  it('should return the correct key', inject([NgxStaticLoaderService], (service: NgxStaticLoaderService) => {
    pipe = new NgxStaticLoaderPipe(service);
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


