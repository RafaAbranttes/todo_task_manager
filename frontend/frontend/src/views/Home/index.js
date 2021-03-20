import React, { useState } from "react";
import * as S from "./styles";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";

function Home() {
  const [filterActived, setFilterActived] = useState();

  return (
    <S.Container>
      <Header></Header>
      <S.FilterArea>
        <a type="a" onClick={() => setFilterActived("all")}>
          <FilterCard
            title="Todos"
            actived={filterActived === "all"}
          ></FilterCard>
        </a>
        <a type="a" onClick={() => setFilterActived("today")}>
          <FilterCard
            title="Hoje"
            actived={filterActived === "today"}
          ></FilterCard>
        </a>
        <a type="a" onClick={() => setFilterActived("week")}>
          <FilterCard
            title="Semana"
            actived={filterActived === "week"}
          ></FilterCard>
        </a>
        <a type="a" onClick={() => setFilterActived("month")}>
          <FilterCard
            title="Mês"
            actived={filterActived === "month"}
          ></FilterCard>
        </a>
        <a type="a" onClick={() => setFilterActived("year")}>
          <FilterCard
            title="Ano"
            actived={filterActived === "year"}
          ></FilterCard>
        </a>
      </S.FilterArea>

      <Footer></Footer>
    </S.Container>
  );
}

export default Home;
