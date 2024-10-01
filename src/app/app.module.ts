// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers), 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
