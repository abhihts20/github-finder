import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.reducer';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryComponent, StoreModule.forRoot(reducers),RouterLink, RouterOutlet, RouterLinkActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
