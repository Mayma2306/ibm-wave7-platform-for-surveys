import { Component, OnInit } from '@angular/core';
import { SurveycardService } from '../surveycard.service';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';

@Component({
  selector: 'app-surveyinfo',
  templateUrl: './surveyinfo.component.html',
  styleUrls: ['./surveyinfo.component.scss']
})
export class SurveyinfoComponent implements OnInit {

  constructor(private survey:SurveycardService, private surveyService : SurveyService) {   }

  result:String;

  private questionList : Question[];

  ngOnInit() {
    console.log(this.surveyService.surveyId);
    this.getQuestionList(this.surveyService.surveyId);
    // this.survey.surveydata().subscribe(data=>{this.result=data;
    // console.log(this.result);});
  }
  
  getQuestionList(surveyId: string) {
    this.surveyService.getAllQuestions(surveyId).subscribe(
      (data) => {
      this.questionList = data.questionList;
        console.log("questions : ", this.questionList)
      })
  }
}


