import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Fact from "../Fact/Fact";
import './QuestionPage.css'

const QuestionPage = ({handleQuestion}) => {
  return(
    <section className="question-page-area">
      <section className="intro-box">
        <h1>Ask me Any Question! </h1>
        <SearchBar handleQuestion={handleQuestion}/>
      </section>
    </section>
  )

}
export default QuestionPage; 