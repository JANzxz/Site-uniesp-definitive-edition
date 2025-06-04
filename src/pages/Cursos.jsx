import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import BannerCurso from '../components/BannerCurso'

const Cursos = () => {
    return (
        <Container className="py-4">
            <BannerCurso />
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <p>Estes são cursos oferecidos pela JÃONIESP a maior faculdade ficticea da Paraiba e Acre, aqui desfrutraras de cursos gratuitos e pagos, que so foram possiveis graças a nossa parceria com a Piracanjuba".</p>
                    <p>Adicionaremos mais cursos futuramente, por mais humilde que nossa faculdade seja selecionamos os melhores cursos para prepaarar nossos alunos não só para o trabalho, mas sim para a vida</p>
                </Card.Body>
            </Card>

            <Row className="g-4">
                <Col md={4}>
                    {/* Card1 */}
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                            alt="Library"
                            style={{ height: "200px", objectFit: "cover" }}
                        />

                        <Card.Body>
                            <Card.Title>
                                Curso Mestres Do Capitalismo
                            </Card.Title>

                            <Card.Text>
                                Este e um curso pago, custando significamente 25.000 reais, para ler a sinopse e preciso pagar o curso
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                {/* Card2 */}
                <Col md={4}>
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="SindicatoDosMendingos.png"
                            alt="Mendigus Life"
                            style={{ height: "200px", objectFit: "cover" }}
                        />

                        <Card.Body>
                            <Card.Title>
                                Curso preparatorio para o sindicato dos mendingos
                            </Card.Title>

                            <Card.Text>
                                Inspirado no ultimo episodio de jojo que eu vi, aqui você aprenderá e poderá trabalhar com o sindicato dos mendingos, onde você receberá um pedaço de calçada para mendigar de carteira assinada
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    {/* Card3 */}
                    <Card className="text-center h-100 shadow-sm">
                        <Card.Img
                            variant="top"
                            src="Paraiba dream.png"
                            alt="Campus Life"
                            style={{ height: "200px", objectFit: "cover" }}
                        />

                        <Card.Body>
                            <Card.Title>
                                Curso de filosofia paraibana
                            </Card.Title>

                            <Card.Text>
                                Aqui nesse curso você estudara sobre o tão falado sonho paraibano, assim podendo alcançalo com mais facilidade
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="g-4 mt-4">
                {/* Card1 */}
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body className='text-center'>
                            <Card.Title>
                                Pareceria com Empresas
                            </Card.Title>
                            <Card.Text>
                                Senai, Petrobras, Ancine, Piracanjuba
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body className='text-center'>
                            <Card.Title>
                                Compromisso com a educação
                            </Card.Title>
                            <Card.Text>
                                Sim
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cursos