import React from 'react';
import ChessGame from './containers/ChessGame/ChessGame';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <Layout>
        <ChessGame />
      </Layout>
   
  );
}

export default App;
