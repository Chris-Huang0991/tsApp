/* tslint:disable */
/* eslint-disable */
/* @relayHash cc85ef39bef5dca31ff55930538c43ab */

import { ConcreteRequest } from "relay-runtime";
export type TestRelayAndHookQueryVariables = {};
export type TestRelayAndHookQueryResponse = {
    readonly user: ReadonlyArray<{
        readonly id: string | null;
    } | null> | null;
};
export type TestRelayAndHookQuery = {
    readonly response: TestRelayAndHookQueryResponse;
    readonly variables: TestRelayAndHookQueryVariables;
};



/*
query TestRelayAndHookQuery {
  user {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TestRelayAndHookQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TestRelayAndHookQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TestRelayAndHookQuery",
    "id": null,
    "text": "query TestRelayAndHookQuery {\n  user {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ec0becfa170e71c63c34ad822ce2b3ee';
export default node;
