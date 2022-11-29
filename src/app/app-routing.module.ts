import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyInfoComponent} from "./company-info/company-info.component";
import {NewsComponent} from "./news/news.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {ActivateGuard} from "./guard/activate.guard";
import {ActivateChildeGuard} from "./guard/activate-childe.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'company-info',
    component: CompanyInfoComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [ActivateGuard],
    canActivateChild: [ActivateChildeGuard],
    children: [
      {
        path: ':id',
        component: NewsDetailComponent,
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
