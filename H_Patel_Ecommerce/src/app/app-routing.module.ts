import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangeContentComponent } from './change-content/change-content.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailComponent
  },
  {
    path: "search",
    component: SearchProductComponent
  },
  {
    path: "list/addContent",
    component: ChangeContentComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }