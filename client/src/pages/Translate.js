import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";

import API from "../utils/translateApi";
import SearchInput from "../components/TranslateComp";
import { SetLang } from "../components/setLangComp";

export default function Search() {
  const [search, setSearch] = useState("");
  const [translations, setTranslation] = useState([]);
  const [userLang, setUserLang] =useState("am")

  const onSave = async (translation) => {
    API.saveTranslation(translation);
  };

  const onSearch = async (evt) => {
    evt.preventDefault();

    const results = await API.getTranslate(search, userLang);
    console.log(results);
    const translations = results.data.translations;

    console.log("trans: " , translations);
    setTranslation(translations);

    // translatedText: "Hola", detectedSourceLanguage: "en"
  };

  return (
    <>
      <Row>
        <Col>
          <SearchInput
            search={search}
            onSearchChange={setSearch}
            onSearch={onSearch}
          />
        </Col>
        <Col>
        <LangParent userLang={userLang} setUserLang={setUserLang}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <ul>
          {translations.map((translation) => {
            return <li key={translation.translatedText}>detected input language: {translation.detectedSourceLanguage} Your translation: {translation.translatedText} </li>
          } )}
        </ul>
        </Col>
      </Row>
    </>
  );
}

export class LangParent extends React.Component {

  changeLanguage = (newLanguage) => {
    this.props.setUserLang(newLanguage)
  }

  render() {
    return <SetLang language={this.props.userLang} onChange={this.changeLanguage} />
  }
}

