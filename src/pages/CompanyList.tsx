import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from '../providers/Relay/environment';
import Test from './test'

const TestRelayAndHook: React.FC = (props) => {
  return (
    <QueryRenderer
      fetchPolicy='store-and-network'
      environment={environment}
      variables={{}}
      query={graphql`
        query TestRelayAndHookQuery {
          user {
            id
            firstName
            age
          }
        }
      `}
      render={({ error, props }) => {
        const a={a:1, b:2, c:3}
        return (
          <div>
            <Hook {...props} />
            1232123
            <Test {...a}/>
          </div>
        );
      }}
    />
  );
};

export default TestRelayAndHook;

const Hook = (props: any) => {
  console.log(props);
  return null;
};
