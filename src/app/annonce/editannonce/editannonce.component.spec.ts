import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditannonceComponent } from './editannonce.component';

describe('EditannonceComponent', () => {
  let component: EditannonceComponent;
  let fixture: ComponentFixture<EditannonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditannonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
