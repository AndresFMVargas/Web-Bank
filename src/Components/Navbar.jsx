import React, { useState } from 'react'
import styled from 'styled-components'
import { BurguerBuutton } from './BurguerBuutton'
import imagenes from '../assets/imagenes'


export const Navbar = () =>  {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <img src={imagenes.Logo} width={150} height={80}/>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="home">Home</a>
          <a onClick={handleClick} href="QuienesSomos">Quiene Somos</a>
          <a onClick={handleClick} href="Convenios">Convenios</a>
          <a onClick={handleClick} href="Tierras">Tierras</a>
          <a onClick={handleClick} href="Carrito">Carrito</a>
        </div>
        <div className='burguer'>
          <BurguerBuutton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    color: #2ECC71;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #FDFEFE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #2ECC71;
    text-decoration: none;
    margin-right: 3rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #2ECC71;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color:#2ECC71;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #2ECC71;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }`