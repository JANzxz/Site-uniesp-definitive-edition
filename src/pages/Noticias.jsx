import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const Noticias = () => {

  const [noticias, setNoticias] = useState([])
  const urlBase = "http://localhost:3000"

  useEffect (() => {
    axios.get(`${urlBase}/noticias`)
    .then(response => setNoticias(response.data))
    .catch(error => console.error("Erro ao carregar a lista de noticias: ", error))
  }, [])

  return (
    <Container className="py-4">
      <h2 className="mb-4">Noticias</h2>

      <Row className="g-4">

        {
          noticias.map()
        }

      </Row>
    </Container>
  )
}

export default Noticias