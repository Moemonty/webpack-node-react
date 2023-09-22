import { createRoot } from 'react-dom/client';
import React from 'react'
import Bugsnag from '@bugsnag/js'
import BugsnagPerformance from '@bugsnag/browser-performance'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import Button from "./components/Button.jsx";

BugsnagPerformance.start('fdaeb60b24129ba05953f6a0823e207f');

Bugsnag.start({
  apiKey: 'fdaeb60b24129ba05953f6a0823e207f',
  plugins: [new BugsnagPluginReact()]
})

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
// Render your React component instead
const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)
const root = createRoot(document.getElementById('app'));

function callBugsnag() {
  Bugsnag.notify(new Error('Test error'));
}

root.render(
  <ErrorBoundary>
    <h1>Bugsnag Demo:</h1>
    <button onClick={() => callBugsnag()}>Break the world</button>
    <Button />
  </ErrorBoundary>
);