import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecntProductComponent } from './recnt-product.component';

describe('RecntProductComponent', () => {
  let component: RecntProductComponent;
  let fixture: ComponentFixture<RecntProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecntProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecntProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
