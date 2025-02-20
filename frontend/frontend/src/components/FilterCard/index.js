import React from 'react'
import * as S from './styles'

import filter from '../../assets/Filter.png'

function FilterCard({title, actived}) {
  return (
    <S.Container actived = {actived}>
      <img src = {filter} alt = "Filtro"></img>
      <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard;
