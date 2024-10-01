import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchHistoryState } from '../store/reducers/search-history.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { clearSearchHistory } from '../store/actions/search-history.action';
import { HelperService } from '@shared/services/helper.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  searchHistory$: Observable<any[]>;
  constructor(private store: Store<{ searchHistory: SearchHistoryState }>, private helperService: HelperService) {
    this.searchHistory$ = this.store.select(state => state.searchHistory.history);  
  }

  clearSearchHistory(){
    this.store.dispatch(clearSearchHistory())
    this.helperService.deleteLocalStorageValues('recentSearches')
  }
}
