import {NgModule} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

function authHttpServiceFactory(http: Http, options: RequestOptions) {
  let tokenName = 'access_token';
  return new AuthHttp(new AuthConfig({
    tokenName,
    tokenGetter: (() => localStorage.getItem(tokenName)),
    globalHeaders: [
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    ],
  }), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule {

}
