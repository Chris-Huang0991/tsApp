/* tslint:disable */
/* eslint-disable */
/* @relayHash 26b30feab3664e7c2dc085c04322fe80 */

import { ConcreteRequest } from "relay-runtime";
export type CompanyCardQueryVariables = {};
export type CompanyCardQueryResponse = {
    readonly getAllCompany: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string | null;
        readonly description: string | null;
        readonly website: string | null;
        readonly address: string | null;
        readonly users: ReadonlyArray<{
            readonly id: string | null;
            readonly firstName: string | null;
        } | null> | null;
    } | null> | null;
};
export type CompanyCardQuery = {
    readonly response: CompanyCardQueryResponse;
    readonly variables: CompanyCardQueryVariables;
};



/*
query CompanyCardQuery {
  getAllCompany {
    id
    name
    description
    website
    address
    users {
      id
      firstName
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getAllCompany",
    "storageKey": null,
    "args": null,
    "concreteType": "Company",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "website",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "address",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CompanyCardQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CompanyCardQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CompanyCardQuery",
    "id": null,
    "text": "query CompanyCardQuery {\n  getAllCompany {\n    id\n    name\n    description\n    website\n    address\n    users {\n      id\n      firstName\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2647cb11cd803ac5a1eec06dad15ab32';
export default node;
