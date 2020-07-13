import styled from 'styled-components';

const PageHeader = styled.header`
  background-color: rgb(68, 38, 171);
  padding: 15px 25px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.81);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  z-index: 99;

  .logo {
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      color: #fff;
      font-size: min(max(17px, 4vw), 25px);
      width: 100%;
      margin: 6px 0 0 0;
    }
  }

  .formSearch {
    form {
      input {
        background-color: #f1f1f1;
        border: 1px solid #fff;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: min(max(17px, 4vw), 13px);
        padding: 8px 0 8px 14px;
        margin: 0 0 8px 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 85%;

        &:focus {
          border: 1px solid #fff;
          outline: none;
        }
      }

      button {
        background-color: #000;
        cursor: pointer;
        color: #fff;
        width: 15%;
        outline: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: min(max(17px,4vw), 13px);
        padding: 9px 0;
        border: 1px solid #000;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #fff;
          color: rgb(68,38,171);
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }

  .profile{
    .iconLinks {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .iconProfile {
        border: 2px solid #fff;
        font-size: min(max(17px,4vw),19px);
        width: 40px;
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin-right: 12px;
        color: #fff;
      }

      .nameUser {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: min(max(17px,4vw), 15px);
        color: #fff;

        span {
          cursor: pointer;
          font-family: 'Montserrat',sans-serif;
          font-weight: 400;
          font-size: min(max(17px,4vw),13px);
          color: #fff;
          position: relative;
          margin: 0 0 0 22px;
        }
      }
    }
  }
`;

export default PageHeader;