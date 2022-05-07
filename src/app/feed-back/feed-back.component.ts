import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedBack } from '../feed-back';
import { FeedBackservice } from '../feed-backservice';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {


  listFeedBacks: any;
  form: boolean = false;
  feedback!: FeedBack;
  closeResult!: string;

  constructor(private FeedBackService: FeedBackservice, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ShowAllFeedback();;

    this.feedback = {
     id_feedback: null, 
     Rate: null,
     Comment: null
    }
  }

  ShowAllFeedback() {
    this.FeedBackService.ShowAllFeedback(FeedBack).subscribe(res => this.listFeedBacks = res)
  }

  addFeedback(feedback: any) {
    this.FeedBackService.addFeedback(feedback).subscribe(() => {
      this.ShowAllFeedback();
      this.form = false;
    });
  }

  updateFeedback(feedback:FeedBack) {
    this.FeedBackService.updateFeedback(FeedBack).subscribe();
  }
  deleteFeedBackById(id: any) {
    this.FeedBackService.DeleteFeedbackbyId(id).subscribe(() => this.ShowAllFeedback())
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  closeForm() {

  }
  cancel() {
    this.form = false;
  }
}

