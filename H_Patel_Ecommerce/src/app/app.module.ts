import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { filterProductTypePipe } from './pipes/filter-product-type.pipe';
import { HighlightImportantDataDirective } from './directives/highlight-important-data.directive';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchProductComponent } from './search-product/search-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    filterProductTypePipe,
    HighlightImportantDataDirective,
    ContentDetailComponent,
    SearchProductComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
