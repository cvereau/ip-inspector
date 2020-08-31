import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInspectorResultsComponent } from './ip-inspector-results.component';

describe('IpInspectorResultsComponent', () => {
  let component: IpInspectorResultsComponent;
  let fixture: ComponentFixture<IpInspectorResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpInspectorResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpInspectorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
