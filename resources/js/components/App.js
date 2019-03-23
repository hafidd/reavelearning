import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

    Jumbotron, Container,

    Row, Col,

    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,

    ListGroup, ListGroupItem, Badge
} from 'reactstrap';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            test: 'ngetes laravel react heroku',
            data: [],
            isOpen: false
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        console.log(this.state.test);
        axios.get('/api/tesdata')
            .then(res => {
                this.setState({ data: res.data })
            }).catch(err => {
                console.log("err " + err);
            })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const data = this.state.data.map(data => { return <ListGroupItem key={data.id} className="justify-content-between">{data.isi} <Badge pill>{data.id}</Badge></ListGroupItem> })
        return (
            <div>
                <div>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                    </Jumbotron>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                            Laravel
                                        </CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                            React
                                        </CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardText>
                                            PostgreSQL <br />
                                        </CardText>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            Test pgsql : <br />
                            <ListGroup>
                                {data}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
