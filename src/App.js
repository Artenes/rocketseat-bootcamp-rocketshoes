import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/** Header */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
