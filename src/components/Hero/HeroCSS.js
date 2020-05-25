import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #d4d4d4;
  @media(max-width: 900px){
    height: 100%;
    h2{
      margin-top: 30px;
      margin-bottom: 15px;
      text-align: center;
    }
  }

  h1{
    font-size: 1.5em;
    text-align: center;
  }
  .content-wrapper{
    padding: 25px;
  }

  .content{
    display: grid; grid-template-columns: 5fr 2fr;
    height: 90%;
    align-content: center;

    &--left{
      // border: 1px solid red;
      display: grid; grid-template-rows: 1fr 1fr;
      height: 100%;

      .about-me{
        padding: 10px;

      }
      .about-portfolio{
        padding: 10px;
        align-self: end;
      }
    }

    &--right{
      // border: 1px solid green;
      div{
        height: 100%; width: auto;
      }
      svg{
        padding: 15px;
        width: 100%; height: 100%;
      }
    }

    @media(max-width: 900px){
      display: flex; flex-direction: column;

      &--left{
        order: 2;
        p{
          // font-size: 0.75em;
        }
        .about-me{
          align-self: start;
        }
        .about-portfolio{
          align-self: start;
        }
      }

      &--right{
        order: 1;
        div{
          max-width: 250px;
          margin: 0 auto;
        }
        svg{
        }
      }
    }
  }
`;