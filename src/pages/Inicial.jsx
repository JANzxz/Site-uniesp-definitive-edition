import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'

const Inicial = () => {
  return (
    <div>
         <Container className="py-4">

{/* Aqui vai ser o carrosel do banner */}
<Card className="mb-4 shadow-sm">
    <Card.Body>
        <p>
            A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
        </p>
        <p>
            Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
        </p>
        <p>
            A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
        </p>
    </Card.Body>
</Card>

<Row className= "g-4">
    <Col md= {4}>
        {/* Card1 */}
        <Card className="text-center h-100 shadow-sm">
            <Card.Img
                variant="top" 
                src="" 
                alt="Campus Life"
                style={{ height: "200px", objectFit: "cover"}} 
            />

            <Card.Body>
                <Card.Title>
                    Vida no Campus
                </Card.Title>
            
            <Card.Text>
                A...
            </Card.Text>

            </Card.Body>
        </Card>
    </Col>
</Row>

</Container>
    </div>
  )
}

export default Inicial