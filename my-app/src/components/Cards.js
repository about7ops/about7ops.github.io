import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profImg from '../images/test.jpg';

function ProfilePicture() {
    return (
        <Card className="text-white">
          <Card.Img src={profImg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      );
    }

export default ProfilePicture;