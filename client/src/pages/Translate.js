import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./translate.css";

import API from "../utils/translateApi";
import SearchInput from "../components/TranslateComp";
import { SetLang } from "../components/setLangComp";

export default function Search() {
  const [search, setSearch] = useState("");
  const [translations, setTranslation] = useState([]);
  const [userLang, setUserLang] = useState("am");

  const onSave = async (translation) => {
    API.saveTranslation(translation);
  };

  const onSearch = async (evt) => {
    evt.preventDefault();

    const results = await API.getTranslate(search, userLang);
    console.log(results);
    const translations = results.data.translations;

    console.log("trans: ", translations);
    setTranslation(translations);

    // translatedText: "Hola", detectedSourceLanguage: "en"
  };

  return (
    <>
      <Container className="translateContainer">
        <h1 className="translateTitle, setBold">Translator</h1>
        <Row className="translateMain">
          <Col>
            <SearchInput
              search={search}
              onSearchChange={setSearch}
              onSearch={onSearch}
            />
          </Col>
          <Col>
            <LangParent userLang={userLang} setUserLang={setUserLang} />
          </Col>
        </Row>
        <Row className="translatorOutput">
          <Col>
          <h2>Translator output:</h2>
            <ul>
              {translations.map((translation) => {
                return (
                  <li key={translation.translatedText} class="translatedText">
                    Translated "{search}" from:{" "}
                    {translation.detectedSourceLanguage} to {userLang} <br />   Your translation:{" "}
                    {translation.translatedText}{" "}
                    
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export class LangParent extends React.Component {
  changeLanguage = (newLanguage) => {
    this.props.setUserLang(newLanguage);
  };

  render() {
    return (
      <SetLang language={this.props.userLang} onChange={this.changeLanguage} />
    );
  }
}
