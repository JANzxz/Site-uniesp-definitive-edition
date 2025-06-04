import React, { useState } from 'react' /* O useState serve para mudar o estado das coisas, então ele vai mudar o estado do do site ao clicar no botão modo escuro e tamebem quando apertar no menu */
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"
import { Link } from 'react-router-dom' /*   navegação entre páginas no React.  */
import uniesp from '../assets/uniesp.jpg' /* Tive que importar porque acabei colocando a imagem em assets */

const CustomNavbar = () => {
    const [show, setShow] = useState(false) /*  controla se o menu lateral (Offcanvas) está aberto.  */
    const [modoEscuro, setModoEscuro] = useState(false) /* diz se o modo escuro está ativado. */

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // Função para alternar modo escuro
    const alternarModoEscuro = () => { /* Const e uma forma de declarar uma variavel no react */
        document.body.classList.toggle("modo-escuro")
        setModoEscuro(!modoEscuro)
    } /* Aqui em cima e para colocar ou tirar o css do modo escuro do corpo da pagina precisei de gpt nessa */

    return (
        <>
            <Navbar expand="md" style={{ backgroundColor: "#002F6C" }} variant="dark" className="px-3 shadow-sm"> {/* Aqui e onde e definido a navbar */}
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center"> {/* Quando clica na logo vai para a pagina inicial */}
                        <img src={uniesp} alt="Uniesp Logo" width={60} height={60} className="me-2 rounded" />
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={handleShow} /> {/* Aqui mostra o botão hamburguer */}
                    <Navbar.Collapse className="justify-content-end d-md-flex"> {/* mostra os links só quando a tela for grande */}
                        <Nav>
                            <Nav.Link as={Link} to="/a-faculdade" className="px-3">A Faculdade</Nav.Link>{/* Aqui e em todas as de baixo Cada link navega para outra página. */}
                            <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to="/noticias" className="px-3">Noticias</Nav.Link>
                            <Nav.Link as={Link} to="/admin-noticias" className="px-3">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/cursos" className="px-3">Cursos</Nav.Link>

                            {/* Botão de modo escuro */}
                            <Button
                                variant={modoEscuro ? "light" : "outline-light"}
                                size="sm"
                                className="ms-3"
                                onClick={alternarModoEscuro}
                            >
                                {modoEscuro ? "Modo Claro" : "Modo Escuro"}
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}> {/* Menu lateral e o handleClose e para fechar o menu */}
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column"> {/* Aqui e em todas as de baixo Cada link navega para outra página so que dentro do offcanvas */}
                        <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>A Faculdade</Nav.Link>
                        <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose}>DPO LGPD</Nav.Link>
                        <Nav.Link as={Link} to="/noticias" onClick={handleClose}>Noticias</Nav.Link>
                        <Nav.Link as={Link} to="/admin-noticias" onClick={handleClose}>Admin</Nav.Link>
                        <Nav.Link as={Link} to="/cursos" onClick={handleClose}>Cursos</Nav.Link>

                        {/* Botão modo escuro no menu mobile */}
                        <Button
                            variant={modoEscuro ? "dark" : "outline-dark"}
                            onClick={() => {
                                alternarModoEscuro()
                                handleClose()
                            }}
                            className="mt-3"
                        >
                            {modoEscuro ? "Modo Claro" : "Modo Escuro"}
                        </Button>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CustomNavbar