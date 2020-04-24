import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import environment from '../providers/Relay/environment';

const TestRealyAndHook: React.FC = (props) => {
  return (
    <QueryRenderer
      fetchPolicy='store-and-network'
      environment={environment}
      variables={{}}
      query={graphql`
        query TestRealyAndHookQuery {
          user {
            id
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

export default TestRealyAndHook;

const Hook = (props: any) => {
  console.log(props);
  return null;
};
