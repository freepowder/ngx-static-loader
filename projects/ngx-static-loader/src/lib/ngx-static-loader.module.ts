import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxStaticLoaderService } from './services/ngx-static-loader.service';
import { NgxStaticLoaderInterface } from './interfaces/ngx-static-loader.interface';
import { NgxStaticLoaderSafeUrlPipe } from './pipes/ngx-static-loader-safe-url.pipe';
import { NgxStaticLoaderPipe } from './pipes/ngx-static-loader.pipe';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    NgxStaticLoaderPipe,
    NgxStaticLoaderSafeUrlPipe
  ],
  exports: [
    NgxStaticLoaderPipe,
    NgxStaticLoaderSafeUrlPipe
  ],
  providers: [NgxStaticLoaderService]
})
export class NgxStaticLoaderModule {
  static forRoot(config: NgxStaticLoaderInterface):  ModuleWithProviders {
    return {
      ngModule: NgxStaticLoaderModule,
      providers: [ HttpClient, NgxStaticLoaderService, { provide: 'config', useValue: config }]
    };
  }
}
