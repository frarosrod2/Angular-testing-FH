import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compile: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match', () => {
    expect(compile).toMatchSnapshot();
  });

  test('increaseBy increment', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });
});
