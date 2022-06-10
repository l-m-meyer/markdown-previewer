import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { marked } from 'marked';
import Title from './components/Title';
import Input from './components/Input';

export default function App() {
  const [markdown, setMarkdown] = useState('');

  const outputStyle = {
    width: '400px',
    height: '50vh',
    backgroundColor: '#DCDCDC',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px'
  }

  return (
    <div className="App">
      <div className="container">
        <Title />
        <div className="row mt-4">
          <Input
            markdown={markdown}
            setMarkdown={setMarkdown}
          />
          <div className="col md-6">
            {' '}
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h4>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(markdown)
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}