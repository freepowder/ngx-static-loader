import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUsageComponent } from './code-usage.component';
import { NgxStaticLoaderModule } from '../../../../projects/ngx-static-loader/src/lib/ngx-static-loader.module';

describe('CodeUsageComponent', () => {
  let component: CodeUsageComponent;
  let fixture: ComponentFixture<CodeUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})],
      declarations: [ CodeUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
