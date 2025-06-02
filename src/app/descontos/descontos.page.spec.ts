import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescontosPage } from './descontos.page';

describe('DescontosPage', () => {
  let component: DescontosPage;
  let fixture: ComponentFixture<DescontosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescontosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
