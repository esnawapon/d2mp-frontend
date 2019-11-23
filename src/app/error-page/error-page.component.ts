import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  template: `
    <h1 class="text-center mt-5 mb-5">Opps... Something went wrong.</h1>
    <pre>{{technicalError}}</pre>
  `,
})
export class ErrorPageComponent implements OnInit {
  technicalError = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams && this.route.snapshot.queryParams.error) {
      this.technicalError = this.route.snapshot.queryParams.error;
    }
  }
}
