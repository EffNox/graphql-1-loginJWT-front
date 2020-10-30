import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment as e } from 'src/environments/environment';

const uri = e.url;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return { link: httpLink.create({ uri }), cache: new InMemoryCache({ addTypename: !1 }) };
}

@NgModule({
  providers: [
    { provide: APOLLO_OPTIONS, useFactory: createApollo, deps: [HttpLink] },
  ],
})
export class GraphQLModule { }
