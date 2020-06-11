import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  font-family: 'Lato', sans-serif;

  h2{
    text-align: center;
    // font-family: 'Lato', sans-serif;
    font-size: 2em;
  }
    
  .container{
    position: relative;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0px auto ;
    padding-bottom: 50px;
  }

  @media(max-width: 998px){
    .container{
      width: 100%;
      flex-direction: column;
      align-items: center;

      .card{
        width: 400px;
      }
    }
  }

  @media(max-width: 768px){
    .container .card{
      max-width: 300px;
      flex-direction: column;
      height: auto;
      
      .imgBx{
        position: relative;
      }

      .imgBx, &:hover .imgBx{
        width: 100%;
        height: 200px;
        left: 0;
      }

      .imgBx img, &:hover .imgBx img{
        max-width: 100px;
      }

      .content{
        position: relative;
        width: 100%;
      }
    }

  }

`;

export const Card = styled.div`

  position: relative;
  height: 250px;
  background: #ededed;
  display: flex;
  width: 45%;
  margin: 30px 0;
  box-shadow: 0 0 5px 0 #000;

  .imgBx{
    position: absolute;
    top: 0; left: 0; 
    width: 100%; height: 100%;
    background: #333;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s ease-in-out;

    &::before{
      content: attr(data-text);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 3em;
      color: rgba(255,255,255,.05);
      font-weight: 700;
      transition: 0.5s ease-in-out;
    }

    img{
      opacity: 0.5;
      margin-top: 50px;
      max-width: 100px;
      transition: 0.5s ease-in-out;
    }
  }

  &:hover .imgBx{
    width: 100px;
    height: 100px;
    left: -50px;
    top: calc(50% - 50px);
    transition: 0.5s ease-in-out;
    background: ${props => props.colors};
    box-shadow: 0 0 15px 0 rgba(0,0,0,1);
    transform: rotate(45deg);
    @media(max-width: 768px){
      transform: unset;
    }
  }

  &:hover .imgBx img{
    margin-top: 0px;
    max-width: 75px;
    transform: rotate(-45deg);
    opacity: 1;
    @media(max-width: 768px){
      transform: unset;
    }
  }
  &:hover .imgBx::before{
    transition: 0.5s ease-in-out;
    opacity: 0;
  }

  .content{
    position: absolute;
    right: 0;
    width: calc(100% - 75px);
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3{
      margin-bottom: 5px;
      font-size: 24px;
      color: ${props => props.colors};
    }
    a{
      display: inline-block;
      margin-top: 10px;
      padding: 5px 10px;
      background: #333;
      text-decoration: none;
      color: #fff;
      border: 1px solid ${props => props.colors};
      box-shadow: 0 0 3px 0 rgba(0,0,0,.25);
    }
  }
`;