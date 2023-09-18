import Card from 'react-bootstrap/Card';


function Player({joueur}) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={joueur.imgUrl} />
      
      <Card.Body>
        <Card.Title>
          <span>Name : </span>{joueur.name}
        </Card.Title>
        <Card.Text>
          <span>Team : </span>{joueur.team}
        </Card.Text>
        <Card.Text>
          <span>Nationality : </span>{joueur.nationality}
        </Card.Text>
        <Card.Text>
          <span>Number : </span>{joueur.Number}
        </Card.Text>
        <Card.Text>
          <span>Age : </span>{joueur.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;