import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizarSushiPage } from './personalizar-sushi.page';

describe('PersonalizarSushiPage', () => {
  let component: PersonalizarSushiPage;
  let fixture: ComponentFixture<PersonalizarSushiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizarSushiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
