// Noticias tem tudo do semestre então se lembre de estudar por ele viu ￣へ￣

import React, { useEffect, useState } from 'react' /* O useEffect e acionado assim que o site carrega */
import axios from 'axios' /* biblioteca pra fazer requisições HTTP  */
import { Col, Row, Card, CardBody, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import url_base from '../config.js';

const Noticias = () => {

  const [noticias, setNoticias] = useState([]) /* noticias é onde vai guardar os dados que vêm da API. Ja setNoticias e para atualizar esses estado */
  const url = `${url_base}/noticias`

  useEffect(() => {
    axios.get(url) /* Aqui ele faz um pedido para a url, get serve pra buscar as coisas*/
      .then(response => setNoticias(response.data)) /* salva os dados da resposta no usestate */
      .catch(error => console.error("Erro ao carregar a lista de noticias: ", error)) /* Pra quando der erro */
  }, [])

  return (
    <Container className="py-4">
      <h2 className="mb-4">Noticias</h2>

      <Row className="g-4"> {/* Row cria uma linha onde várias Cols vão ser colocadas. */}

        {
          noticias.map(noticia => ( /* percorre cada item e cria um card com a imagem e o título. No caso o map repete componentes so que com dados diferentes.*/
            <Col xs={12} sm={6} md={4} key={noticia.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={`/${noticia.image}`}
                  alt={`Imagem da notícia ${noticia.id}`}
                  style={{ objectFit: 'cover', height: '140px' }}
                />
                <CardBody>
                  <Card.Title>{noticia.titulo}
                  </Card.Title>
                  <Link to={`/visualiza-noticia/${noticia.id}`} className='text-decoration-none text-primary'> {/* O botão "Ler mais" leva pra página */}
                    <small>Ler mais</small>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          )) /* Aqui e pra fazer o mapeamento de noticias */
        }
      </Row>
    </Container>
  )
}

export default Noticias