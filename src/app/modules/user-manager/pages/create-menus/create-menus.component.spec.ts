import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMenusComponent } from './create-menus.component';

describe('CreateMenusComponent', () => {
  let component: CreateMenusComponent;
  let fixture: ComponentFixture<CreateMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMenusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
