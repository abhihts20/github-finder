import { Component, NgModule } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { HelperService } from '@shared/services/helper.service';
import { SearchHistoryState } from './store/reducers/search-history.reducer';
import { loadSearchHistory } from './store/actions/search-history.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HistoryComponent,
    RouterLinkActive,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-org';

  constructor(private helperService: HelperService, private store: Store<{ searchHistory: SearchHistoryState }>){
    let recentSearchesData =
    this.helperService.getLocalStorage('recentSearches');
  if (recentSearchesData !== null && Array.isArray(recentSearchesData)) {
    this.store.dispatch(loadSearchHistory({ history: recentSearchesData }));
  }
  }
}
