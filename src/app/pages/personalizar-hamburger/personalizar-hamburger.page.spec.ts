import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizarHamburgerPage } from './personalizar-hamburger.page';

describe('PersonalizarHamburgerPage', () => {
  let component: PersonalizarHamburgerPage;
  let fixture: ComponentFixture<PersonalizarHamburgerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizarHamburgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
