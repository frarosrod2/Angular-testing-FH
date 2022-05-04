import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CounterRouteComponent } from '../../../app/basic/counter-route/counter-route.component';
import { ActivatedRoute } from '@angular/router';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  it('debe de tener valor inicial en 0', async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  });

  it('debe de tener valor inicial de 100 en la ruta /100', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '100' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  });
  it('debe de tener valor inicial de 10 en la ruta /20abc', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'initial' ? '20abc' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CounterRouteComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  });
});
