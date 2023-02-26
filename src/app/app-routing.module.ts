import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'coin',
    loadChildren: () => import('./pages/coin/coin.module').then(m => m.CoinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
