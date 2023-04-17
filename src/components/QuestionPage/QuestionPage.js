import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import Fact from "../Fact/Fact";
import './QuestionPage.css'

const QuestionPage = () => {
  return(
    <section className="question-page-area">
      <section className="intro-box">
        <h1>Ask me Any Question! </h1>
        <SearchBar/>
      </section>
      <Fact/>
    </section>
  )

}
export default QuestionPage; 