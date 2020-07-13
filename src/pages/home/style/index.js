import styled from 'styled-components';

const PageLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100%);

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(auto-fill, 50%);
  }

  .item {
    &.login {
      .logoInitial {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #000;
        font-size: min(max(17px, 4vw), 40px);
        width: 100%;
        text-align: center;
        margin: 12vw 0 34px 0;

        span {
          color: rgb(68, 38, 171);
        }
      }
    }

    &.register {
      h2 {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: min(max(17px, 4vw), 45px);
        width: 100%;
        text-align: center;
        margin: 12vw 0 34px 0;
      }

      p {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: min(max(17px, 4vw), 18px);
        width: 100%;
        text-align: center;
      }

      a {
        cursor: pointer;
        color: #fff;
        width: 30%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 26px auto 0 auto;
        display: block;
        font-size: min(max(17px,4vw),18px);
        padding: 9px 0;
        border: 1px solid #fff;
        border-radius: 13px;
        text-align: center;
        }
      }
    }

    form {
      display: block;
      margin: 0 auto;
      width: 50%;

      input {
        background-color: #f1f1f1;
        border: 1px solid #dcdcdc;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: min(max(17px, 4vw), 18px);
        display: block;
        padding: 8px 0 8px 14px;
        margin: 0 0 8px 0;
        border-radius: 8px;
        width: 100%;

        &:focus {
          border: 1px solid rgb(68,38,171);
          outline: none;
        }
      }

      button {
        background-color: rgb(68,38,171);
        cursor: pointer;
        color: #fff;
        width: 60%;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin: 26px auto 0 auto;
        display: block;
        font-size: min(max(17px,4vw),18px);
        padding: 9px 0;
        border: 1px solid rgb(68,38,171);
        border-radius: 13px;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #fff;
          color: rgb(68,38,171);
          transition: all 0.2s ease-in-out;
        }
      }
    }
  }
`

export default PageLogin;