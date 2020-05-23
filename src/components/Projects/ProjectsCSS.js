import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Project = styled.div`
  height: 100vh;
  background: ${props => props.primaryColor};
  color: ${props => props.fontPrimaryColor};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .project-main-content{
    
    position: relative;
    // top: 50%;
    // transform: translate(0, -50%);
    display: flex; flex-direction: column;
    text-align: right;

    .main-content-positioning{
      padding: 15px;
      position: absolute;
      z-index: 55;
      top: 50%;
      transform: translate(0, -50%);
      @media(max-width: 768px){
        padding: 2.5px;
      }
    }
  }


  svg, path, g{
    cursor: pointer;
    height: 100% !important;
    width: auto;
  }
  svg{
    // height: 100%;
    width: 100%;
    [data-name="Path-1"]{
      fill: ${props => props.svgColors[0]};
      animation: animated2 3s alternate infinite;
    }
    [data-name="Path-2"]{
      fill: ${props => props.svgColors[1]};
      animation: animated1 4s alternate infinite;
    }
    [data-name="Path-3"]{
      fill: ${props => props.svgColors[2]};
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
    overflow: hidden;
    position: absolute;
    width: 100%; height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .sidebar{
      cursor: pointer;
      position: relative;
      right: 0;
      top: 0;
      overflow: hidden;
      height: 100%;
      width: 500px !important;
      background: #177180;
      // padding: 20px;
      font-size: 15px;

      .sidebar-content{
        border: 5px solid red;
      }
    }

  }


`;