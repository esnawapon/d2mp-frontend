import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PredictionService } from '../services';
import { ResolveErrorService } from './resolve-error.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolveService implements Resolve<{}> {
	constructor(
		private service: PredictionService,
		private error: ResolveErrorService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
		return this.service.serverCheck()
			.pipe(catchError((e) => this.error.handle(e, route, state)));
	}
}
