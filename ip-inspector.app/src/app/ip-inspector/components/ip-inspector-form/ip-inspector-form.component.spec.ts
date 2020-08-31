import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInspectorFormComponent } from './ip-inspector-form.component';

describe('IpInspectorFormComponent', () => {
  let component: IpInspectorFormComponent;
  let fixture: ComponentFixture<IpInspectorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpInspectorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpInspectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
