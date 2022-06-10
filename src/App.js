import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default class App extends React.Component {
  render() {
    const inputStyle = {
      width: '400px',
      height: '50vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px'
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
                <div className='mark-input'>
                  <textarea className='input' />
                </div>
              </div>
            </div>
            <div className="col md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
                <div className='mark-output'>
                  <textarea className='output' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}