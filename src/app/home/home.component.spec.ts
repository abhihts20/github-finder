import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.reducer';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, StoreModule.forRoot(reducers), RouterLink, RouterOutlet, RouterLinkActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
