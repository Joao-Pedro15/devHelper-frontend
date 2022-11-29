import styled from 'styled-components'

type IToggle = {
  isToggle: boolean
}

export const Container = styled.aside<IToggle>`
  border-top: 1px solid #222;
  background: #333;
  position: fixed;
  top: 2.4rem;
  height: calc(100vh - 2rem);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: ${({ isToggle }) => isToggle ? '300px' : '60px'};
  overflow: hidden;
  transition: .3s ease-in all;
  ul{
    width:100%;
    display: flex;
    flex-direction: column;
  }

  a{
    padding: 15px 0;
    color: #FDFDFD;
    display: grid;
    place-items: center;
    border-bottom: .5px solid #222;
    transition: .1s ease-out;
  }
  a:hover{
    background-color: #555;
  }

  li{
    width: 90%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 4px;
  }

  li span:first-of-type{
    font-size: 1.5rem;
    margin-top: 5px;
    margin-left: 10px;
  }
`