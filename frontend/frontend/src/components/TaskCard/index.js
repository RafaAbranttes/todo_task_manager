import React, {useMemo} from 'react'
import {format} from 'date-fns'
import * as S from './styles'
import typeIcons from '../utils/typeIcons'


function TaskCard({type, title, when, done}) {

  const date = useMemo(() => {
    return format(new Date(when), 'dd/MM/yyyy')
  })

  const hour = useMemo(() => {
    return format(new Date(when), 'HH:mm')
  })

  return (
    <S.Container done = {done}>
        <S.TopCard>
          <img src = {typeIcons[type]} alt = "Ícone da tarefa"></img>
          <h3>{title}</h3>
        </S.TopCard>
        <S.BottomCard>
          <strong>{date}</strong>
          <span>{hour}</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
