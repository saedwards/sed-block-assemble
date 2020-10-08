import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedBlockAssembleComponent } from './sed-block-assemble.component';

describe('SedBlockAssembleComponent', () => {
  let component: SedBlockAssembleComponent;
  let fixture: ComponentFixture<SedBlockAssembleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedBlockAssembleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedBlockAssembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
