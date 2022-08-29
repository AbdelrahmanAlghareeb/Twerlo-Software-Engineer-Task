import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []
  rank: number | undefined
  score: number | undefined
  constructor(
    private apiService: ApisService
  ) { }
  ngOnInit() {
    this.score = history.state.score // capture the score of the user
    this.submitScoreAndGetRank(this.score as number)
  }
  ngOnDestroy(): void {
    history.state.score = undefined
    this.subscriptions.forEach(subs => subs.unsubscribe());
  }

  /**
  * @description load the rank of the user accordint to his/her score
  * @param score : number
  */
  submitScoreAndGetRank(score: number) {
    const subs = this.apiService.getRank(score).subscribe((res) => {
      this.rank = res.result
    })
    this.subscriptions.push(subs)
  }
}
