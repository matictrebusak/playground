import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomElementsComponent } from './random-elements.component';

describe('RandomElementsComponent', () => {
  let component: RandomElementsComponent;
  let fixture: ComponentFixture<RandomElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
