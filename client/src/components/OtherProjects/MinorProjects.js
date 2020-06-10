import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #fff; 

  .container{
    position: relative;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px auto;
    .card{
      position: relative;
      height: 250px;
      background: #fff;
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
          font-size: 6em;
          color: rgba(255,255,255,.05);
          font-weight: 700;
        }

        img{
          max-width: 100px;
          transition: 0.5s ease-in-out;
        }
      }

      &:hover .imgBx{
        width: 150px;
        height: 150px;
        left: -75px;
        top: calc(50% - 75px);
        transition: 0.5s ease-in-out;
        background: #ff0057;
      }

      &:hover .imgBx img{
        max-width: 75px;
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
        }
        a{
          display: inline-block;
          margin-top: 10px;
          padding: 5px 10px;
          background: #333;
          text-decoration: none;
          color: #fff;
        }
      }
    }
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

const MinorProjects = ({refs}) => {
  return (
    <Wrapper ref={refs['b']} style={{paddingTop: "100px", background: '#d4d4d4'}}> 
      <h1>Other projects</h1>
      <p>Various small projects. </p>
      <div className="container">

        <div className="card">
          <div className="imgBx" data-text="Design">
            <img src="https://images.pexels.com/photos/3220530/pexels-photo-3220530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          </div>
        
          <div className="content">
            <div>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt.</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBx" data-text="Design">
            <img src="https://images.pexels.com/photos/3220530/pexels-photo-3220530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          </div>
        
          <div className="content">
            <div>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt.</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBx" data-text="Design">
            <img src="https://images.pexels.com/photos/3220530/pexels-photo-3220530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          </div>
        
          <div className="content">
            <div>
              <h3>Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nesciunt.</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default MinorProjects
