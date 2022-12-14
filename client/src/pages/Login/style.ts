import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
`
export const Banner = styled.div`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #FFE;
  svg, img {
    height: 8rem;
    width: 8rem;
  }
  p{
    font-size: 1rem;
  }
`

export const Form = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 10px solid #fff;

  form {
    .logo {
      display: flex;
      align-self: flex-start;
      flex-direction: row !important;
      align-items: center;
      color: blueviolet;
      img, svg { width: 2rem; height: 2rem }
    }
    display: flex;
    flex-direction: column;
    gap: 20px;
    small {
      align-self: flex-end;
      color: #777;
    }
  }

  div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    input {
      background-color: blueviolet;
      color: #FFE;
    }
    a{
      color: blueviolet;
      text-decoration: solid;
    }
  }

  input, button{ 
    padding: 20px 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    box-shadow: 0px 0px 8px #ccc;
    min-width: 100%;
  }

  input[type="submit"] {
    cursor: pointer;
    transition: .3s ease-in-out;
    font-size: 1rem;
    font-weight: 700;
    transform: scale(.95);
    :hover {
      background-color: darkviolet;
      opacity: 2;
    }
  }
`