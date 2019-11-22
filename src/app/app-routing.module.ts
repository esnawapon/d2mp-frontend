import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionComponent } from './prediction/prediction.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolveService } from './resolvers/server-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'blank', component: BlankPageComponent },
	{ path: 'error', component: ErrorPageComponent },
  {
    path: 'main',
    component: PredictionComponent,
    // resolve: {
    //   server: ServerResolveService
    // }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
