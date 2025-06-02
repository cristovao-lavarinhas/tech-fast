import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizarBebidaPage } from './personalizar-bebida.page';

describe('PersonalizarBebidaPage', () => {
  let component: PersonalizarBebidaPage;
  let fixture: ComponentFixture<PersonalizarBebidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizarBebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
