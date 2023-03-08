import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardComponentComponent } from './dasboard-component.component';

describe('DasboardComponentComponent', () => {
  let component: DasboardComponentComponent;
  let fixture: ComponentFixture<DasboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
