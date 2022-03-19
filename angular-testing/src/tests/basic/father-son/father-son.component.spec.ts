import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('No deben de aparecer botones si no hay cliente', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('On delete', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));

    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('On client updated', () => {
    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();

    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChangeId = compiled.querySelector('[data-test=btn-id]');
    btnChangeId?.dispatchEvent(new Event('click'));

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Juan',
    });
  });

  test('on change client con cliente especifico', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

    component.client = { id: 1, name: 'Juan' };
    fixture.detectChanges();
    component.onChange(10);

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 10,
      name: 'Juan',
    });
  });
});
