import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as fromRoot from '../app.reducer';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
} from '@angular/router';
import { Injectable, OnChanges } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>
  ) {}

  // ngOnChanges() {
  //   this.authService.initAuthListener();
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    // console.log(this.authService.isAuth());
    // if (this.authService.isAuth()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  canLoad(route: Route): Observable<boolean> | boolean {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));

    // console.log(this.authService.isAuth());
    // if (this.authService.isAuth()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    // }

    // return this.afAuth.authState.pipe(
    //   map((user) => {
    //     if (user) {
    //       console.log('hereeeeeeee');
    //       return true;
    //     } else {
    //       this.router.navigate['/login'];
    //       return false;
    //     }
    //   })
    // );
  }
}
