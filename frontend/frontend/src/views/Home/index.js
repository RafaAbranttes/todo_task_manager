import React, { useState, useEffect } from "react";
import * as S from "./styles";

import api from "../../services/api";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterActived] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      .then((response) => {
        setTasks(response.data);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  function Notification(){
    setFilterActived('late')
  }

  return (
    <S.Container>
      <Header lateCount = {lateCount} clickNotification = {Notification}></Header>
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

      <S.Title>
        <h3>{filterActived === 'late' ? 'tarefas atrasadas' : 'tarefas'}</h3>
      </S.Title>

      <S.Content>
        {tasks.map((task) => (
          <TaskCard
            type={task.type}
            title={task.title}
            when={task.when}
          ></TaskCard>
        ))}
      </S.Content>

      <Footer></Footer>
    </S.Container>
  );
}

export default Home;
