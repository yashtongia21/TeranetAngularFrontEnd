import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../model/feedback';
import { Router } from '../../../../node_modules/@angular/router';
import { FeedbackService } from '../../services/feedback.service';
@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  feedback: Feedback;

  constructor(private feedbackserv: FeedbackService,
    private router: Router) { }

  ngOnInit() {
    this.feedback = new Feedback();
  }
  save() {

    this.feedbackserv.addFeedback(this.feedback).subscribe(
      (data) => {
        this.feedback = data;
        this.router.navigateByUrl("/successful/?id=" + this.feedback.feedbackId);
      },
      (error) => { alert("error"); }
    );
  }
  cancel() {

  }
}
