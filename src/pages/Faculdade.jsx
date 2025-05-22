import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'

const Faculdade = () => {
	return (
		<Container className="py-4">
			<h2 className="mb-4">A FACULDADE</h2>

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
								Vida no campus
							</Card.Title>

							<Card.Text>
								A...
							</Card.Text>

						</Card.Body>
					</Card>
				</Col>

				{/* Card2 */}
				<Col md={4}>
					<Card className="text-center h-100 shadow-sm">
						<Card.Img
							variant="top"
							src=""
							alt="Campus Life"
							style={{ height: "200px", objectFit: "cover" }}
						/>

						<Card.Body>
							<Card.Title>
								Biblioteca
							</Card.Title>

							<Card.Text>
								A...
							</Card.Text>

						</Card.Body>
					</Card>
				</Col>

				<Col md={4}>
					{/* Card3 */}
					<Card className="text-center h-100 shadow-sm">
						<Card.Img
							variant="top"
							src=""
							alt="Campus Life"
							style={{ height: "200px", objectFit: "cover" }}
						/>

						<Card.Body>
							<Card.Title>
								Predio principal
							</Card.Title>

							<Card.Text>
								A...
							</Card.Text>

						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Container>
	)
}

export default Faculdade   