import Button from 'react-bootstrap/Button';

function IntroButtons() {
  return (
    <>
        <div className="introButtons">
            <Button variant="primary" size="lg" href="#">My Resume</Button>
            <Button variant="secondary" size="lg" href="#">My Contact</Button> 
        </div>
    </>
  );
}

export default IntroButtons;