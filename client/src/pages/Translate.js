import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import API from "../utils/translateApi";
import SearchInput from "../components/TranslateComp";
import { SetLang } from "../components/setLangComp";

export default function Search() {
  const [search, setSearch] = useState("");
  const [translations, setTranslation] = useState([]);

  const onSave = async (translation) => {
    API.saveTranslation(translation);
  };

  const onSearch = async (evt) => {
    evt.preventDefault();

    const results = await API.getTranslate(search);
    const translations = results.data.map((translation) => ({
      id: translation.id,
      translationRes: translation.data.translations[0].translatedText,
      onSave,
    }));

    console.log("results: " + results);
    setTranslation(translations);
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
        <LangParent/>
        </Col>
      </Row>
      <Row>
        <Col>{/* <BookList translations={translations} /> */}</Col>
      </Row>
    </>
  );
}

export class LangParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { language: 'am' };
    
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  
  changeLanguage(newLanguage) {
    this.setState({
      language: newLanguage
    });
  }

  render() {
    return <SetLang language={this.state.language} onChange={this.changeLanguage} />
  }
}


// export default Translate
