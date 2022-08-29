import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Word } from '../../models/word';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() word : Word | undefined;
  @Input() posTypes !: string[];
  @Output() questionAnswered : EventEmitter<boolean> = new EventEmitter<boolean>();
  answeredCorrectly:boolean | undefined
  selectedAnswer : string | undefined
  /**
    * @description check selection of the user and emit the answer
    * @param selectedType:string
  */
  checkSelection(selectedType:string){
    this.selectedAnswer = selectedType
    this.answeredCorrectly = this.word?.pos === selectedType
    setTimeout(() => {
      this.questionAnswered.emit(this.answeredCorrectly)
      this.reset();
    }, 500);
  }
  /**
    * @description reset component state
  */
  reset(){
    this.word = undefined;
    this.answeredCorrectly = undefined;
    this.selectedAnswer = undefined;
  }
}
