import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import backgroundImg from '../images/background.jpg'
import { useAppDispatch } from '../hooks/redux'
import { inputChange } from '../store/reducers/FormSubmit'
import { closePopup } from '../store/reducers/CharacterPopup'
import styled from 'styled-components'

const StyledHeader = styled.header`
  color: white;
  background-image: url(${backgroundImg});
  background-size: cover;
  margin: 0;
  height: 20vh;
  width: 100%;
  @media (max-width: 570px) {
    height: 45vh;
  }
`
const StyledHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  font-size: 20px;
  @media (max-width: 570px) {
    display: contents;
  }
`
const StyledSubmitButton = styled.button`
  height: 35px;
  width: 35px;
  font-size: 30px;
`
const StyledSelect = styled.select`
  margin: 7px;
  margin-left: 15px;
  margin-right: 20px;
`
const StyledDivider = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`
const StyledH2 = styled.h2`
  -webkit-text-stroke: 1.5px black;
`

const Header = () => {
  const dispatch = useAppDispatch()

  type SearchParams = {
    status: string
    gender: string
    name: string
    species: string
    type: string
  }
  const [searchParams, setSearchParams] = useState<SearchParams>({
    status: '',
    gender: '',
    name: '',
    species: '',
    type: '',
  })

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(closePopup())
    dispatch(inputChange(searchParams))
  }

  return (
    <StyledHeader>
      <form onSubmit={handleFormSubmit}>
        <StyledH2>Filter characters</StyledH2>
        <StyledHeaderRow>
          <StyledDivider>
            <StyledH2>Name</StyledH2>
            <input
              type="text"
              placeholder="Rick"
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  name: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
          </StyledDivider>
          <StyledDivider>
            <StyledH2>Species</StyledH2>
            <input
              type="text"
              placeholder="Alien"
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  species: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
          </StyledDivider>
          <StyledDivider>
            <StyledH2>Type</StyledH2>
            <input
              type="text"
              placeholder="Superhuman"
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  type: (e.target as HTMLInputElement).value,
                })
              }
            ></input>
          </StyledDivider>
        </StyledHeaderRow>
        <StyledHeaderRow>
          <StyledH2>Status</StyledH2>
          <StyledSelect
            onChange={(e) =>
              setSearchParams({ ...searchParams, status: e.target.value })
            }
          >
            <option></option>
            <option>alive</option>
            <option>dead</option>
            <option>unknown</option>
          </StyledSelect>
          <StyledH2>Gender</StyledH2>
          <StyledSelect
            onChange={(e) =>
              setSearchParams({
                ...searchParams,
                gender: e.target.value as string,
              })
            }
          >
            <option></option>
            <option>female</option>
            <option>male</option>
            <option>genderless</option>
            <option>unknown</option>
          </StyledSelect>
          <StyledSubmitButton type="submit">
            <FaSearch className="search_icon" />
          </StyledSubmitButton>
        </StyledHeaderRow>
      </form>
    </StyledHeader>
  )
}

export default Header
