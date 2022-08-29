import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './components/practice/practice.component';
import { QuestionComponent } from './components/question/question.component';
import { RankingComponent } from './components/ranking/ranking.component';


@NgModule({
  declarations: [
    PracticeComponent,
    RankingComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
