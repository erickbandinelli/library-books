import styled from 'styled-components';

const ListBook = styled.section`
  .listBook {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
    margin: 38px 0 0 0;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 368px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .img {
      width: 100%;
      height: 30vw;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      padding: 23px 0 0 0;
      border: 1px solid #eaeaea;    
    }

    .info {
      width: 95%;
      margin: 0 0 0 1vw;

      h2 {
        font-family: 'Montserrat',sans-serif;
        font-weight: 500;
        font-size: min(max(17px,4vw),25px);
        color: #272727;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
      }

      h3 {
        font-family: 'Montserrat',sans-serif;
        font-weight: 500;
        padding: 0;
        font-size: min(max(17px,4vw),12px);
        margin: 0 0 19px 0;
      }
  
      .infoBuy {
        background-color: #fff;
        border: 15px solid #e4e4e4;

        span {
          font-family: 'Montserrat',sans-serif;
          font-weight: 400;
          font-size: min(max(17px,4vw),25px);
          color: #272727;
          padding: 15px 0 0 18px;
          display: block;
        }

        ul {
          padding: 0 15px;

          li {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0 0 3px 0;

            span {
              font-family: 'Montserrat',sans-serif;
              font-weight: 400;
              font-size: min(max(17px,4vw), 13px);
              color: #272727;
              padding: 0 0 0 2px;
            }

            svg {
              font-size: min(max(17px,4vw),15px);
              margin: 0 3px 0 0;
            }
          }
        }

        button {
          font-family: 'Montserrat',sans-serif;
          font-weight: 400;
          font-size: min(max(17px,4vw),13px);
          display: block;
          width: 94%;
          margin: 0 auto 10px auto;
          padding: 11px 0;
          text-align: center;
          outline: none;

          &.active {
            cursor: pointer;
            background-color: rgb(68,38,171);
            color: #fff;
            border: 1px solid rgb(68,38,171);
          }

          &.desable {
            cursor: not-allowed;
            pointer-events: all;
            background-color: rgb(255, 255, 255);
            color: rgba(88, 88, 88, 0.6);
            border: 1px solid rgba(88, 88, 88, 0.6)
          }
        }
      }
    }
  }
`

export default ListBook;