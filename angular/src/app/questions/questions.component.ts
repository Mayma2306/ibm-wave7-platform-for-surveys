import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { parse } from 'querystring';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private questionList: Question[];
  constructor(private router : Router,    private surveyService: SurveyService,private route : ActivatedRoute) { }

  ngOnInit() {
   this.getQuestionList("e320dc50-5605-84b6-ae4c-bbe90371ddc7");
  }
  submit()
  {
    this.router.navigateByUrl('thankyou')
  }
  getQuestionList(surveyId: string) {
    console.log("questions : ", this.questionList);
    this.surveyService.getAllQuestions(surveyId).subscribe(data => {
      this.questionList = data.questionList;
      console.log("questions : ", this.questionList);
    });
  }
}

