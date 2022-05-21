import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSchematicComponent } from './default-schematic.component';

describe('DefaultSchematicComponent', () => {
  let component: DefaultSchematicComponent;
  let fixture: ComponentFixture<DefaultSchematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultSchematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
