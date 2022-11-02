import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  margin: auto;
  border: 1px solid #333;
  border-radius: 10px;
  width: 40%;
  height: 50%;
  left: 30%;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  box-shadow: 0px 2px 10px #eee;

  h1{
    color: darkred;
    span { color: black }
    border-bottom: 2px solid #ccc;
  }

  form {
    width: 90%;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    width: 100%;
    label {
      font-weight: 700;
      font-size:.8rem;
      padding: 2px 5px;
    }

    input {
      padding: 8px 10px;
      outline: none;
      border: 1px solid #333;
      box-shadow: 0px 3px 10px #ccc;
      border-radius: 2px;
      color: #333;
    }
  }
  button{
    padding: 10px 20px;
    outline: none;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: darkred;
    color: #eee;
  }
`