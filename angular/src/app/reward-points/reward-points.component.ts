import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.scss']
})
export class RewardPointsComponent implements OnInit {
  @Input() public parentData;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  reward() {
      this.router.navigateByUrl("");
  
  }
}
