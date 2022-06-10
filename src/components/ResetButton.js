import Button from 'react-bootstrap/Button';

export default function ResetButton({ setMarkdown }) {
  return (
    <Button
      variant='outline-secondary'
      size='sm'
      onClick={() => setMarkdown('')}
    >
      Reset
    </Button >
  );
};