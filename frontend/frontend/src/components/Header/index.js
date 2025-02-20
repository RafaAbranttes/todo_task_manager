import React from 'react'
import * as S from './styles'
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header({lateCount, clickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"></img>
      </S.LeftSide>

      <S.RightSide>
        <Link to = "/">início</Link>
        <span className = "dividir"></span>
        <Link to = "/task">nova tarefa</Link>
        <span className = "dividir"></span>
        <a href="#">sincronizar celular</a>
        <span className = "dividir"></span>
        <a href="#" id="notification" onClick = {clickNotification}>
          <img src={bell} alt="Notificação"></img>
          <span>{lateCount}</span>
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
