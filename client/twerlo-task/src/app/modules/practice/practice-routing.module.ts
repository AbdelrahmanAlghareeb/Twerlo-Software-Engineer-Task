import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { RankingComponent } from './components/ranking/ranking.component';

const routes: Routes = [
  { path:"" , component:PracticeComponent },
  { path:"rank" , component:RankingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
