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
  overflow: hidden;

  position: relative;

  .background-image{
    width: 80%; height: auto;
    opacity: 0.1;
    position: absolute;
    ${props => props.bgImageCSSscreen};
    @media(max-width: 900px){
      ${props => props.bgImageCSSmobile};
    }
  }

  .project-top-info{
    position: absolute;
    top: 0; left: 2.5px;
    line-height: 35px;

    padding: 0 10px;
    // border-bottom: 1px solid black;

    color: #000;
    // background: white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    @media(max-width: 768px){
    }
  }

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
      display: grid;
      align-content: space-between;
      width: 100%;
      h1{
        font-size: 3em;
      }
      &>h4{
        padding-bottom: 20px;  
      }
      &>p{
        text-align: right;
        padding-top: 20px;
        padding-left: 100px;
        text-shadow: 1px 1px 2px rgba(0,0,0,.6);
      }

      .live-link-container{

        margin-top: 40px;
        // display: block;
        // width: 100%;
        float: right; 
        // display: grid;
        // align-items: center;
        span:nth-child(1){
          position: relative;
          svg{
            position: absolute;
            top: 0; left: -15px;
            // margin-right: 5px;
            width: 25px; height: auto;
          }
        }

        a{

          text-decoration: none;
          &:hover{
            text-decoration: underline;
          }
        }
        span{
          box-shadow: 0 0 3px 0 #000;
          padding: 5px 10px;
          // border: 1px solid black;
        }
        span:nth-child(1){
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          color: grey;
          background: #d4d4d4;
        }
        span:nth-child(2){
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
          margin-left: 3.5px;
          color: #000;
          background: #fff;
        }

        @media(max-width: 649px){
          margin-top: 20px;
          span:nth-child(1){
            display: none;
          }
          span:nth-child(2){
            font-size: 3vw;
            border-radius: 5px;

            @media(max-width: 355px){
              font-size: 2.5vw;
            }
          }

      
        }
      }


      @media(max-width: 768px){
        padding: 2.5px;

        h1{
          font-size: 2em;
        }
        p{
          padding-left: 5px;
        }
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

    .svg-waves-container{
      position: relative;

      .show-more-less{
        width: 25px; height: 25px;
        transform-origin: center center;
        position: absolute;
        top: 10%; left: 30%;
        transform: translate(0, 0);
        // @media(max-width: 768px){
        //   top: 10%; left: 50%;
        //   transform: translate(-50%, -50%);
        // }
        svg{
          fill: white;
          // width: 25px; height: auto;
        }

        @media(max-width: 768px){
          top: 5%;
        }
      }

    }



    .sidebar{
      padding: 5px;
      cursor: pointer;
      position: relative;
      right: 0;
      top: 0;
      overflow: hidden;
      height: 100%;
      width: 500px;
      background: ${props => props.sidebar_bg_color};

      display: flex; flex-direction: column;
      text-align: left;

      .sidebar-content{
        position: absolute;
        z-index: 56;
        top: 50%;
        transform: translate(0, -50%);

        // youtube btn
        .presn-btn-top{
          &>a>button{
            border: 0;
            background: red;
            color: white;
            margin-bottom: 5px;
            box-shadow: 0 0 4px 0 rgba(0,0,0,.65);
          }
        }
        // github btn
        .presn-btn-bot{
          &>a>button{
            border: 0;
            background: black;
            color: white;
            // margin-bottom: 5px;
            box-shadow: 0 0 4px 0 rgba(0,0,0,.65);
            outline: none;
          }
        }
        

        button{
          background: transparent;
          padding: 5px 10px;
          border-radius: 5px;
        }

        .technologies, .features, .presentation{
          padding: 10px 0;
          display: flex; flex-direction: column;
          h2{
            padding-left: 10px;
          }
          img{
            width: auto; height: 35px;
          }
          svg{
            fill: ${props => props.fontPrimaryColor};
            width: 35px; height: auto;
          }
          &>div{
            display: flex; flex-direction: row;
            h2{
              margin: 0;
            }
            ul > li{
              color: ${props => props.font_sidebar_secondary_color};
              list-style-position: inside;
              // list-style-type: square;
            }
          }
          
          @media(max-width: 450px){
            h2{
              font-size: 5vw;
            }
            &>div{
              ul > li{
                font-size: 3.75vw;
              }
            }
          }
        }


      }
    }

  }


`;