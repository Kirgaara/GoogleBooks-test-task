import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Card from './Card'
import { charactersFetch } from '../store/reducers/CharactersFetch'
import CharacterPopup from './CharacterPopup'
import ErrorBlock from './ErrorBlock'
import styled from 'styled-components'

const StyledLoader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 50px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const StyledContentBlock = styled.div`
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 375px;
  justify-content: center;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`
const StyledLoadMore = styled.button`
  background-color: #0a66c2;
  font-size: 30px;
  margin-bottom: 40px;
  margin-top: 20px;
  border-radius: 20px;
  width: 220px;
  height: 60px;
  color: white;
  cursor: pointer;
`

const Body = () => {
  const dispatch = useAppDispatch()
  const { isLoading, error, characters } = useAppSelector(
    (state) => state.charactersReducer
  )
  const { status, gender, name, species, type } = useAppSelector(
    (state) => state.formReducer
  )
  const { opened } = useAppSelector((state) => state.characterPopupReducer)

  const [pageCounter, setPageCounter] = useState(2)

  useEffect(() => {
    dispatch(charactersFetch(1, status, gender, name, species, type))
  }, [dispatch, gender, status, name, species, type])

  return (
    <>
      {isLoading && <StyledLoader />}
      {error && <ErrorBlock />}
      {opened && <CharacterPopup />}
      {!isLoading && !error && (
        <>
          <StyledContentBlock>
            <>
              {!!characters.length &&
                !isLoading &&
                characters?.map((value: string, index: number) => (
                  <Card key={index} id={index} />
                ))}
            </>
          </StyledContentBlock>
          <StyledLoadMore
            onClick={() => {
              setPageCounter(pageCounter + 1)
              dispatch(
                charactersFetch(
                  pageCounter,
                  status,
                  gender,
                  name,
                  species,
                  type
                )
              )
            }}
          >
            Load more
          </StyledLoadMore>
        </>
      )}
    </>
  )
}

export default Body
