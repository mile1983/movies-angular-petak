import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
