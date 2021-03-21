import React, { useState, useEffect } from "react";
import * as S from "./styles";

import api from "../../services/api";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../components/utils/typeIcons";
import iconCalendar from "../../assets/data.png";
import iconClock from "../../assets/clock.png";

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function Save(){
    await api.post('/task', {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then( 
      () => alert("Tarefa cadastrada com sucesso")
    )
  }

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification}></Header>
      <S.Form>
        <S.TypeIcons>
          {TypeIcons.map(
            (icon, index) =>
              index > 0 && (
                <a type="button" onClick={() => setType(index)}>
                  <img
                    src={icon}
                    alt="Tipo da tarefa"
                    className={type && type != index && "inative"}
                  ></img>
                </a>
              )
          )}
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input
            type="text"
            placeholder="Título da tarefa..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea
            rows={5}
            placeholder="Detalhes da tarefa..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input
            type="date"
            placeholder="Título da tarefa..."
            onChange={(e) => setDate(e.target.value)}
            value={date}
          ></input>
          <img src={iconCalendar} alt="calendário"></img>
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input
            type="time"
            placeholder="Título da tarefa..."
            onChange={(e) => setHour(e.target.value)}
            value={hour}
          ></input>
          <img src={iconClock} alt="relógio"></img>
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox"
              checked = {done}
              onChange = {(e) => setDone(!done)}
            ></input>
            <span>Concluído</span>
          </div>
          <button type="button">Excluir</button>
        </S.Options>

        <S.Save>
          <button type="button"  onClick = {Save} >Salvar</button>
        </S.Save>
      </S.Form>
      <Footer></Footer>
    </S.Container>
  );
}

export default Task;
