import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
=======
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';
import { Question } from '../modals/Question';
import { parse } from 'querystring';
>>>>>>> 17a3f40861f265b2baf36d99dbe67af216e0aad0

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
<<<<<<< HEAD

  constructor(private router : Router,private survey:SurveyService) { }
  num;
  ngOnInit() {
  this.survey.expiryCheck().subscribe(
    (num) =>
    {this.num=num;
      console.log(window.location.href)
  });

   
=======
  private questionList: Question[];
  constructor(private router : Router,    private surveyService: SurveyService,private route : ActivatedRoute) { }

  ngOnInit() {
    let surveyId=this.route.snapshot.paramMap.get('surveyId');
   this.getQuestionList(surveyId);
>>>>>>> 17a3f40861f265b2baf36d99dbe67af216e0aad0
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
  saveResponse(userResponse: Response) {

    console.log(userResponse); 


    // this.loading = true;
    this.surveyService.saveResponse(userResponse)
      .subscribe(
        data => {

        },
        error => {
          alert("error=" + error);
        });


  }

<<<<<<< HEAD
  newSurveys()
  {
    
  }

  
=======
>>>>>>> 17a3f40861f265b2baf36d99dbe67af216e0aad0
}

