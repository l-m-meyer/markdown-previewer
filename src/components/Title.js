import Badge from 'react-bootstrap/Badge';

export default function Title(props) {
  return (
    <div className="row mt-4">
      <div className="col text-center">
        <h1>
          {' '}
          <Badge className="text-align-center" variant="light">
            Markdown Previewer
          </Badge>
        </h1>
      </div>
    </div>
  );
};