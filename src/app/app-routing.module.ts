import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import('./pages/global-news/global-news.module').then(
        (m) => m.GlobaNewsModule
      ),
  },

  {
    path: `spanish`,
    loadChildren: () =>
      import('./pages/spanish-news/spanish-news.module').then(
        (m) => m.SpanishNewsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
