import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdutComponent } from './add-produt.component';

describe('AddProdutComponent', () => {
  let component: AddProdutComponent;
  let fixture: ComponentFixture<AddProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
