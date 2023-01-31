import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getFile } from './getFile';

function App() {
  const [buildVersion, setBuildVersion] = React.useState<string>('')

  const getBuildVersion = async () => {
    if (process.env.NODE_ENV === 'development') {
      return;
    }
    try {
      const publicUrl = process.env.PUBLIC_URL;
      const file = `/buildVersion.txt?${Date.now()}`
      const path = publicUrl ? publicUrl + file : file;
      const res = await getFile(path);

      setBuildVersion(res)
    } catch (error) {
      console.error(error)
      setBuildVersion('')
    }
  }
  return (
    <div className="App" onClick={getBuildVersion}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build version: '<code>{buildVersion}</code>'
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
