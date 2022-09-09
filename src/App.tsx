import React from 'react';
import AlertManager from './AlertManager';
import AlertsExample from './AlertsExample';

import './App.css';

function App() {
  return (
    <AlertManager>
      <AlertsExample />
    </AlertManager>
  );
}

export default App;
