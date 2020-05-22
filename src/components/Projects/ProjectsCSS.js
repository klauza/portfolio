import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Project = styled.div`
  height: 100vh;
  background: lightgreen;
  width: 100%;

  .sidebar{
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 280px;
    background: white;
    padding: 20px;
    font-size: 15px;
  }

  .sidebar-toggle {
    position: absolute;
    margin: 20px;
    color: #a0a0a0;
    z-index: 100;
    font-size: 1.5em;
    cursor: pointer;
  }
  .login-form-forgot {
    float: right;
  }
  
  .login-form-button {
    width: 100%;
  }
  
  .ant-avatar {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    font-size: 3em !important;
  }
  
  .middle .ant-form-item-control {
    display: flex;
    justify-content: center;
  }
  
  .sidebar .ant-form-item {
    margin: 0;
  }
  
  .sidebar .ant-form-item-control {
    line-height: 29px;
  }
`;