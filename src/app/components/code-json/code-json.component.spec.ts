import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJsonComponent } from './code-json.component';
import { NgxStaticLoaderModule } from '../../../../projects/ngx-static-loader/src/lib/ngx-static-loader.module';

describe('CodeJsonComponent', () => {
  let component: CodeJsonComponent;
  let fixture: ComponentFixture<CodeJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgxStaticLoaderModule.forRoot({path: 'assets/static/static-content.json'})],
      declarations: [ CodeJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
