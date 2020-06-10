import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 1280px;  
  min-height: 100vh;
  padding-top: 100px;
  margin: 0 auto;  
  
  .container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .box{
      position: relative;
      width: 300px;
      height: 400px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-box-reflect: below 15px linear-gradient(transparent, transparent, rgba(0,0,0,.2));

      &:hover{
        color: #000;
      }

      &::before{
        content: '';
        position: absolute;
        top: -10px; left: -10px;
        width: 100%; height: 100%;
        border: 4px solid #fff;
        background: #000;
        filter: url(#wavy);
      }

      &::after{
        content: '';
        position: absolute;
        top: -10px; left: -10px;
        width: 50%; height: 100%;
        border: 4px solid #fff;
        border-right: none;
        background: rgba(255,255,255,.1);
        filter: url(#wavy);
      }

      &:hover::before{
        background: #fff;
        transition: 0.5s;
      }

      .content{
        position: absolute;
        padding: 20px;
        text-align: center;
        transition: 0.5s;
      }
    }
  }
  svg{
    width: 0; height: 0;
  }
`;
