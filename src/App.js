import { useState } from 'react';
import Title from './components/Title';
import Input from './components/Input';
import Output from './components/Output';

export default function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="App">
      <div className="container">
        <Title />
        <div className="row mt-4">
          <Input
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
          <Output markdown={markdown} />
        </div>
      </div>
    </div>
  )
}