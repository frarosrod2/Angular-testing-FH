import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherComponent } from '../../../app/basic/father/father.component';
import { FatherSonComponent } from '../../../app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de establecer cliente con nombre indicado', () => {
    component.onSetClient('Pedro');
    fixture.detectChanges();

    const codeDiv = compiled.querySelector('.mt-2');

    expect(codeDiv?.textContent).toContain('"name"');
    expect(codeDiv?.textContent).toContain('Pedro');
  });

  test('debe de borrar el cliente si se emite on deleteClient', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebug = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebug.componentInstance;

    sonComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined);
  });
  test('debe de actualizar el cliente si se emite on clientUpdate', () => {
    component.client = { id: 1, name: 'Eduardo' };
    fixture.detectChanges();

    const sonDebug = fixture.debugElement.query(
      By.directive(FatherSonComponent)
    );
    const sonComponent: FatherSonComponent = sonDebug.componentInstance;

    sonComponent.onClientUpdated.emit({ id: 10, name: 'Pedro' });
    expect(component.client).toEqual({ id: 10, name: 'Pedro' });
  });
});
