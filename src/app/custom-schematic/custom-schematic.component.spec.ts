import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSchematicComponent } from './custom-schematic.component';

describe('CustomSchematicComponent', () => {
  let component: CustomSchematicComponent;
  let fixture: ComponentFixture<CustomSchematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSchematicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
