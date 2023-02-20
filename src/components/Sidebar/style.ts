import styled from 'styled-components'

type IToggle = {
  isToggle: boolean
}

export const Container = styled.aside<IToggle>`
  background: blueviolet;
  position: fixed;
  top: 4rem;
  left: .6rem;
  border-radius:10px;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: ${({ isToggle }) => isToggle ? '300px' : '60px'};
  overflow: hidden;
  transition: .3s ease-in all;
  z-index: 1000;
  ul{
    width:100%;
    display: flex;
    flex-direction: column;
  }

  a{
    padding: 10px 0;
    color: #FDFDFD;
    display: grid;
    place-items: center;
    /* border-bottom: .5px solid #222; */
    transition: .3s ease-out;
  }
  a:hover{
    background-color: orange;
  }

  li{
    width: 80%;
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