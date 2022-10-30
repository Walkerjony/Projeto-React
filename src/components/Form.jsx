import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Multiselect from "multiselect-react-dropdown";

function Forms() {
  
  const [countries, setCountries] = useState([])

  const [cities, setCities] = useState([])

  const getCountriesData = async () => {
    const countriesName = []
    const reqData = await fetch('https://amazon-api.sellead.com/country');
    const resData = await reqData.json()

    for(let i = 0; i < resData.length; i++) {
      countriesName.push(resData[i].name);
    }
    setCountries(countriesName)
  }

  const getCitiesData = async () => {
    const citiesName = []
    const reqData = await fetch('https://amazon-api.sellead.com/city');
    const resData = await reqData.json()

    for(let i = 0; i < resData.length; i++) {
      citiesName.push(resData[i].name);
    }
    setCities(citiesName)
  }

  useEffect(() => {
    getCountriesData();
    getCitiesData();
  },[])


  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control required type="text" name="name" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control required type="email" name="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control required type="text" name="cpf" placeholder="CPF" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control required type="text" name="tel" placeholder="Telefone" />
        </Form.Group>

        <Form.Label>País</Form.Label>
        <Form.Group as={Col} controlId="formPais">
        <Multiselect className="multiSelects"
          isObject = {false}
          options = {countries}
          placeholder = "Selecionar Países"
          />
        </Form.Group>

        <Form.Label>Cidade</Form.Label>
        <Form.Group as={Col} controlId="formCidade"> 
        <Multiselect className="multiSelects"
          isObject = {false}
          options = {cities}
          placeholder = "Selecionar Cidades"
          
          />
        </Form.Group>  <br />


        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Row>
    </Form>
  );
}

export default Forms;