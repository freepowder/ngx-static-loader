import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUsageLinkComponent } from './code-usage-link.component';
import { NgxStaticLoaderModule } from '../../../../projects/ngx-static-loader/src/lib/ngx-static-loader.module';

describe('CodeUsageLinkComponent', () => {
  let component: CodeUsageLinkComponent;
  let fixture: ComponentFixture<CodeUsageLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})],
      declarations: [ CodeUsageLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeUsageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
