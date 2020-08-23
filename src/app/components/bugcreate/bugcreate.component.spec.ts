import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugcreateComponent } from './bugcreate.component';

describe('BugcreateComponent', () => {
  let component: BugcreateComponent;
  let fixture: ComponentFixture<BugcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
