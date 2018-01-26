import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';





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
    SearchModule,
    OrderModule,
    NgxPaginationModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
