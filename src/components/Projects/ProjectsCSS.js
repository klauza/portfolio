import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Project = styled.div`
  height: 100vh;
  background: lightblue;
  width: 100%;

  svg, path, g{
    height: 100% !important;
    width: auto;
  }
  svg{
    // height: 100%;
    // width: auto;
    [data-name="Path-1"]{
      animation: animated2 3s alternate infinite;
    }
    [data-name="Path-2"]{
      animation: animated1 4s alternate infinite;
    }
  }
  @keyframes animated1{
    0%{
      transform: rotateY(0deg) rotateX(0deg);
    }
    100%{
      transform: rotateY(50deg) rotateX(10deg);
    }
  }
  @keyframes animated2{
    0%{
      transform: rotateY(0deg) rotateX(0deg);
    }
    100%{
      transform: rotateY(30deg) rotateX(-5deg);
    }
  }

  .project-justify{
    background: 'lightblue';
    width: 100%; height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .sidebar{
      position: relative;
      right: 0;
      top: 0;
      overflow: hidden;
      height: 100%;
      width: 280px;
      background: white;
      // padding: 20px;
      font-size: 15px;
    }
  
  }



  



`;