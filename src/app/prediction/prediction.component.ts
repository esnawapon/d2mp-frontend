import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { HERO_OPTIONS, MODE_OPTIONS } from '../constaints';
import { SelectOption, PredictionResult } from '../types';
import { FormService, PredictionService } from '../services';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html'
})
export class PredictionComponent implements OnInit {
  form: FormGroup;
  modeOptions: SelectOption<number>[] = MODE_OPTIONS;
  heroOptions: SelectOption<number>[] = HERO_OPTIONS.sort((o1, o2) => o2.name < o1.name ? 1 : -1);
  submitting: boolean;
  feedbacked: boolean;
  predictionResult: PredictionResult;
  predictParams: {};
  constructor(
    private formService: FormService,
    private predictionService: PredictionService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      mode: new FormControl(1, Validators.required),
      hero1: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero2: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero3: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero4: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero5: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero6: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero7: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero8: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero9: new FormControl(Math.floor(Math.random() * 112) + 1),
      hero10: new FormControl(Math.floor(Math.random() * 112) + 1)
    });
    const duplicatedHeroValidation: ValidatorFn = (control: AbstractControl): {} | null => {
      if (control.value) {
        const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          .filter(i => this.form.controls[`hero${i}`].value === control.value)
          .length;
        if (count > 1) {
          return { duplicated: true };
        }
      }
      return null;
    };
    for (let i = 1; i <= 10; i++) {
      this.form.controls[`hero${i}`].setValidators([Validators.required, duplicatedHeroValidation]);
    }
  }

  scrollToElementId(id) {
    setTimeout(() => {
      const el = document.getElementById(id);
      window.scrollTo(500, el.offsetTop);
    }, 100);
  }

  onSubmit() {
    for (let i = 1; i <= 10; i++) {
      this.form.controls[`hero${i}`].updateValueAndValidity();
    }
    this.formService.markAsTouched(this.form);
    if (this.form.valid) {
      this.predictParams = this.form.value;
      this.submitting = true;
      this.form.disable();
      this.predictionResult = undefined;
      this.feedbacked = false;
      this.scrollToElementId('spinner');
      this.predictionService.predict(this.predictParams).pipe(
        finalize(() => {
          this.submitting = false;
          this.form.enable();
        })
      ).subscribe((response) => {
        this.predictionResult = response;
        this.scrollToElementId('result');
      }, (error) => {
        console.log('error', error);
        let message = error.error;
        window.alert(message);
      });
    } else {
      this.formService.focusInvalid();
      console.log('invalid form');
    }
  }

  onFeedback(correct: boolean) {
    this.predictParams['win'] = this.predictionResult.win && correct;
    this.submitting = true;
    this.form.disable();
    this.scrollToElementId('spinner');
    this.predictionService.predict(this.predictParams).pipe(
      finalize(() => {
        this.submitting = false;
        this.form.enable();
      })
    ).subscribe(() => {
      this.feedbacked = true;
      this.scrollToElementId('result');
    }, (error) => {
      console.log('error', error);
      let message = error.error;
      window.alert(message);
    });
  }
}
