import React from 'react';
import { Import } from 'yody-ui';
import { getFile } from './getFile';
import ConversationSvg from './icon-conversation.svg';

function App() {
  const [builtVersion, setBuiltVersion] = React.useState('');
const getBuiltVersion = async () => {
  try {
     getFile('/builtVersion.txt').then((res) => {
      console.log(res)
      setBuiltVersion(res);
      });
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
      <button onClick={() => {
        getBuiltVersion();
      }}>Load version: {builtVersion}</button>
      <h1>Hello, world!ss!</h1>
      <img src={ConversationSvg} alt="conversation" />
      <Import />

    </div>
  );
}
export default App;
