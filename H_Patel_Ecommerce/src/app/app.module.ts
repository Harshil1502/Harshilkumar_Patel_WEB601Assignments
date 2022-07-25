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
import { AngularInMemoryWebApiService } from './services/angular-in-memory-web-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ChangeContentComponent } from './change-content/change-content.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
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
    PageNotFoundComponent,
    ChangeContentComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AngularInMemoryWebApiService, {
      delay: 1000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
