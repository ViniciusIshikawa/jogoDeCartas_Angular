import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HerosComponent } from './pages/heros/heros.component';
import { BaralhoComponent } from './pages/baralho/baralho.component';

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'tabuleiro', component: HerosComponent},
  { path: 'baralho', component: BaralhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
