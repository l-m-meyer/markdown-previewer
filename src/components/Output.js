import { marked } from 'marked';
import Badge from 'react-bootstrap/Badge';

export default function Output({ markdown }) {

  const outputStyle = {
    width: '400px',
    height: '50vh',
    backgroundColor: '#DCDCDC',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '55px',
    padding: '10px',
    borderRadius: '5px',
  }

  return (
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
  );
};