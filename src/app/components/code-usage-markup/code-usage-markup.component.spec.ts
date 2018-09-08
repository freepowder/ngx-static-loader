import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUsageMarkupComponent } from './code-usage-markup.component';
import { NgxStaticLoaderModule } from '../../../../projects/ngx-static-loader/src/lib/ngx-static-loader.module';

describe('CodeUsageMarkupComponent', () => {
  let component: CodeUsageMarkupComponent;
  let fixture: ComponentFixture<CodeUsageMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})],
      declarations: [ CodeUsageMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeUsageMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
