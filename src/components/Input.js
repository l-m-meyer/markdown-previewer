import Badge from 'react-bootstrap/Badge';
import ResetButton from './ResetButton';

export default function Input({ setMarkdown, markdown }) {

  const inputStyle = {
    width: '400px',
    height: '50vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, .50)',
  }

  return (
    <div className="col md-6">
      {' '}
      <div className="col text-center">
        <h4>
          <Badge
            className="text-align-center" variant="secondary"
          >
            Markdown Input
          </Badge>
        </h4>
        <ResetButton setMarkdown={setMarkdown} />
        <div
          className='mark-input'
        // style={inputStyle}
        >
          <textarea
            className='input'
            style={inputStyle}
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          >
            {' '}
            {console.log(markdown)}
          </textarea>
        </div>
      </div>
    </div>
  );
};