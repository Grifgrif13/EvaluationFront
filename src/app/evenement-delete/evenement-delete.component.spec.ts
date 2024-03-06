import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementDeleteComponent } from './evenement-delete.component';

describe('EvenementDeleteComponent', () => {
  let component: EvenementDeleteComponent;
  let fixture: ComponentFixture<EvenementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvenementDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
