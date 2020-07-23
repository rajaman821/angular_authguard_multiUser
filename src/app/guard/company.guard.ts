import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompanyGuard implements CanActivate {

    constructor(private _router: Router) {
    }
    canActivate(
        next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (localStorage.getItem("role") != undefined && localStorage.getItem("role") == "1") {
            return true;
        }
        else {
            this._router.navigate(['/no-access']);
            return false;
        }
    }


}