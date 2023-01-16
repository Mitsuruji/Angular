import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSimHomeComponent } from './word-sim-home.component';

describe('WordSimHomeComponent', () => {
  let component: WordSimHomeComponent;
  let fixture: ComponentFixture<WordSimHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSimHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordSimHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
