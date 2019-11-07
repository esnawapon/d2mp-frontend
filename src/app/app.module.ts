import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyResultsComponent } from './utils/empty-results/empty-results.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormControlErrorComponent } from './utils/form-control-error/form-control-error.component';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyResultsComponent,
    BlankPageComponent,
    ErrorPageComponent,
    FormControlErrorComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
