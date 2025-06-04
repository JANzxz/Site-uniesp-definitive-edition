import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import url_base from '../config.js';
import axios from 'axios'
import { Card, CardBody, Container } from 'react-bootstrap';

const VisualizaNoticia = () => {
    const { id } = useParams() /* Pega o id da URL. Tipo se a URL for /visualiza-noticia/3 ele vai pegar o id 3 */
    const [noticia, setNoticias] = useState({})
    const url = `${url_base}/noticias` 

    useEffect(() => { /* useEffect porque o código roda só uma vez, quando o componente é carregado na tela. */
        axios.get(`${url_base}/noticias/${id}`) /* Faz um GET para a API usando o id que veio da URL. Tipo ele vai buscar as informações de acordo com a url se url_base = "http://localhost:3000" e id = 3, vai chamar:http://localhost:3000/noticias/3 */
            .then(response => setNoticias(response.data)) /* Toda requisição http retorna uma response, então ele joga dentro do useState a lista que vai vir do backend */
            .catch(error => console.error("Erro ao obter a noticias: ", error)) /* Pra quando der erro */
    }, [])

    return (
        <Container className='py-4'>
            <Card className='shadow-sm'>
                <CardBody>
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Text>{noticia.texto}</Card.Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export default VisualizaNoticia