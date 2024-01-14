import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { useAppSelector } from '../hooks/redux'
import { closePopup } from '../store/reducers/CharacterPopup'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  width: 60vw;
  height: 50vh;
  margin-top: -25vh;
  margin-left: -30vw;
  background-color: beige;
  display: grid;
  grid-template-columns: 8fr 12fr 0.5fr;
  grid-template-areas: 'image info close';
  border: 1px solid black;
  @media (max-width: 850px) {
    width: 90vw;
    height: 70vh;
    margin-top: -35vh;
    margin-left: -45vw;
    grid-template-rows: 5% 30% 65%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'close'
      'image'
      'info';
  }
`
const StyledImg = styled.img`
  grid-area: image;
  max-width: 400px;
  width: 90%;
  height: 70%;
  object-fit: contain;
  margin: 50px auto;
  @media (max-width: 850px) {
    height: 100%;
  }
`
const StyledInfo = styled.div`
  grid-area: info;
  padding-top: 9vh;
`
const StyledH3 = styled.h3`
  font-size: max(1.5vw, 16px);
  font-weight: 400;
`
const StyledH2 = styled.h2`
  font-size: max(2vw, 18px);
`
const StyledClosePopup = styled.div`
  grid-area: close;
  max-width: 45px;
  min-width: 21px;
  width: 5%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`

const CharacterPopup = () => {
  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    created,
  } = useAppSelector((state) => state.characterPopupReducer)
  const dispatch = useAppDispatch()

  return (
    <>
      <StyledWrapper>
        <StyledImg src={image} alt="" />
        <StyledInfo>
          <StyledH3>{status}</StyledH3>
          <StyledH2>{name}</StyledH2>
          <StyledH3>Species: {species}</StyledH3>
          <StyledH3>Type: {type ? type : 'None'}</StyledH3>
          <StyledH3>Gender: {gender}</StyledH3>
          <StyledH3>Planet of origin: {origin}</StyledH3>
          <StyledH3>Last seen on: {location}</StyledH3>
          <StyledH3>Created on {created}</StyledH3>
        </StyledInfo>
        <StyledClosePopup onClick={() => dispatch(closePopup())}>
          ❌
        </StyledClosePopup>
      </StyledWrapper>
    </>
  )
}

export default CharacterPopup
