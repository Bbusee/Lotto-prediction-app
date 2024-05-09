import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNumaraComponent } from './on-numara.component';

describe('OnNumaraComponent', () => {
  let component: OnNumaraComponent;
  let fixture: ComponentFixture<OnNumaraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnNumaraComponent]
    });
    fixture = TestBed.createComponent(OnNumaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
