import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUsageTextComponent } from './code-usage-text.component';
import { NgxStaticLoaderModule } from '../../../../projects/ngx-static-loader/src/lib/ngx-static-loader.module';

describe('CodeUsageTextComponent', () => {
  let component: CodeUsageTextComponent;
  let fixture: ComponentFixture<CodeUsageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})],
      declarations: [ CodeUsageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeUsageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
