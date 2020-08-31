import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInspectorSearchComponent } from './ip-inspector-search.component';

describe('IpInspectorSearchComponent', () => {
  let component: IpInspectorSearchComponent;
  let fixture: ComponentFixture<IpInspectorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpInspectorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpInspectorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
