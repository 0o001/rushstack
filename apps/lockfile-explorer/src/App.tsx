import { Calendar } from '@fluentui/react';
import * as React from 'react';
import { readLockfile } from './parsing/readLockfile';

/**
 * This React component renders the application page.
 */
export class App extends React.Component {
  public render(): React.ReactNode {
    readLockfile('');
    const appStyle: React.CSSProperties = {
      backgroundColor: '#ffffff',
      padding: '20px',
      margin: '20px',
      borderRadius: '5px',
      width: '400px'
    };

    return (
      <div style={appStyle}>
        <h2>Hello, world!</h2>

        <Calendar />

        <p>Here is an example image:</p>
        <img src={require('./rushstack-icon.svg')} />
      </div>
    );
  }
}
