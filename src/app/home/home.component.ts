import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { HelperService } from '@shared/services/helper.service';
import { ProfileService } from '@shared/services/profile.service';
import { SearchHistoryState } from '../store/reducers/search-history.reducer';
import {
  addSearchHistory,
  loadSearchHistory,
} from '../store/actions/search-history.action';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  githubUserName: string = '';
  userData: any = null;
  constructor(
    private profileService: ProfileService,
    private helperService: HelperService,
    private store: Store<{ searchHistory: SearchHistoryState }>
  ) {
    let data = this.helperService.getLocalStorage('userData');
    if (data && data !== null && data !== undefined) {
      this.userData = data;
    } else this.userData = null;
  }
  async onSubmit() {
    if (this.githubUserName)
      this.profileService.getUserProfile(this.githubUserName).subscribe({
        next: (data) => {
          this.helperService.setLocalStorage('userData', data);
          let recentSearchResults =
            this.helperService.getLocalStorage('recentSearches');
          const storageObject = {
            query: this.githubUserName,
            success: true,
            userData: data,
          };
          if (!recentSearchResults) {
            recentSearchResults = [storageObject];
          } else {
            recentSearchResults.push(storageObject);
          }
          this.helperService.setLocalStorage(
            'recentSearches',
            recentSearchResults
          );
          this.userData = data;
          this.store.dispatch(addSearchHistory(storageObject));
          this.githubUserName = '';
        },
        error: (err) => {
          this.store.dispatch(
            addSearchHistory({ query: this.githubUserName, success: false })
          );
          alert('Failed to fetch user info');
        },
      });
    else alert('Please enter a username');
  }
}
