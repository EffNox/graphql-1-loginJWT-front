import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getUsers, login, meDt } from '../operations/query';
import { pluck } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private apollo: Apollo) { }


  getAll() {
    return this.apollo.watchQuery({ query: getUsers, fetchPolicy: 'network-only' }).valueChanges.pipe(pluck('data', 'users'));
  }

  login(cor, pwd) {
    return this.apollo.watchQuery({ query: login, variables: { cor, pwd }, fetchPolicy: 'network-only' }).valueChanges.pipe(pluck('data'));
  }

  getMe(authorization) {
    return this.apollo.query({ query: meDt, context: { headers: { authorization } } }).pipe(pluck('data'));
  }



}
