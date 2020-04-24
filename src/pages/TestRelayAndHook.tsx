import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from '../providers/Relay/environment';

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
        return (
          <div>
            <Hook {...props} />
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
