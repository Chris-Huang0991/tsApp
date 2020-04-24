import React from 'react';
import List from './pages/list';
import TestRelay from './pages/TestRelayAndHook';
// import graphql from 'babel-plugin-relay/macro';
import { graphql } from 'babel-plugin-relay/macro'

function App() {
  return (
    <div>
      <List data={['a','a']}/>
      <TestRelay />
    </div>
  );
}

export default App;
