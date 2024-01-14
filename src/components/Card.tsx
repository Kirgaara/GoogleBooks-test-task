import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { pickCharacter } from '../store/reducers/CharacterPopup'
import styled from 'styled-components'

const StyledName = styled.h2`
  margin: 5px;
  font-size: 100%;
  font-weight: bold;
`
const StyledImg = styled.img`
  height: 55%;
  margin: 10px auto;
`
const StyledGender = styled.h3`
  margin: 5px;
  font-size: 100%;
  font-weight: 400;
`
const StyledStatus = styled.h3`
  margin: 5px;
  font-size: 100%;
  font-weight: 400;
`
const StyledCard = styled.div`
  margin: 20px auto;
  width: 252px;
  height: 350px;
  background-color: beige;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
`

const Card = ({ id }: { id: number }) => {
  const { characters } = useAppSelector((state) => state.charactersReducer)
  const dispatch = useAppDispatch()
  return (
    <StyledCard onClick={() => dispatch(pickCharacter(characters[id]))}>
      {!characters.length ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <StyledImg src={characters[id].image} alt="" />
          <StyledStatus>{characters[id].status}</StyledStatus>
          <StyledName>{characters[id].name}</StyledName>
          <StyledGender>{characters[id].gender}</StyledGender>
        </>
      )}
    </StyledCard>
  )
}

export default Card
