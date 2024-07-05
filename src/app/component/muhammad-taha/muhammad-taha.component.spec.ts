import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhammadTahaComponent } from './muhammad-taha.component';

describe('MuhammadTahaComponent', () => {
  let component: MuhammadTahaComponent;
  let fixture: ComponentFixture<MuhammadTahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuhammadTahaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuhammadTahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
