import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApisService } from 'src/app/services/apis.service';
import { Word } from '../../models/word';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []
  limit: number = 10
  currentQuestionIndex: number = 0
  correctAnswersCount = 0
  progress: number = 0
  wordsList: Word[] = []
  posTypes: string[] = []

  constructor(
    private apiSerivce: ApisService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getWordList();
    this.getPosTypes();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  /**
    * @description Load random words
  */
  getWordList() {
    const subs = this.apiSerivce.getWordsList(this.limit)
      .subscribe((res) => {
        this.wordsList = res.result
      })
    this.subscriptions.push(subs);
  }

  /**
    * @description Load part of speech types dynamically
  */
  getPosTypes() {
    const subs = this.apiSerivce.getPosTypes()
      .subscribe((res) => {
        this.posTypes = res.result
      })
    this.subscriptions.push(subs);
  }

  /**
   * @description handler function to the question answered event
   * @param answeredCorrectly : boolean
   */
  questionAnsweredHandler(answeredCorrectly: boolean) {
    const nextIndex = this.currentQuestionIndex + 1

    // increase the count of correctedAnswers if the question is correctly answered
    if (answeredCorrectly) this.correctAnswersCount++;

    // check if the questions ended
    if (nextIndex < this.wordsList.length) { // not yet
      this.currentQuestionIndex++;
    } else { // done
      setTimeout(() => {
        const score = (this.correctAnswersCount / this.wordsList.length) * 100
        this.router.navigate(['./practice/rank'], { state: { score } })
      }, 300);
    }
    this.progress = Math.round((this.currentQuestionIndex / (this.wordsList.length)) * 100)
  }
}
