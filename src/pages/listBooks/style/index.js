import styled from 'styled-components';

const ListBooks = styled.section`
  .listBooks {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 88%;
    margin: 38px 0 0 0;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 368px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .card {
      background-color: #fff;
      border-radius: 5px;
      margin: 0 12px 13px 0;

      .img {
        height: 137px;
        background-size: 45%;
        background-position: center;
        background-repeat: no-repeat;
        padding: 23px 0 0 0;
        border-bottom: 1px solid #eaeaea;    
      }

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: min(max(17px, 4vw), 18px);
        color: #272727;
        padding: 12px 0 0 18px;
      }

      h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: min(max(17px, 4vw), 13px);
        color: #272727;
        padding: 0 0 0 18px;
      }

      span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: min(max(17px, 4vw), 20px);
        color: #272727;
        padding: 0 0 17px 18px;
        display: block;
      }

      a {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: min(max(17px, 4vw), 13px);
        display: block;
        width: 100%;
        background-color: rgb(68,38,171);
        color: #fff;
        border: 1px solid rgb(68,38,171);
        padding: 11px 0;
        text-align: center;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        outline: none;
        text-decoration: none;
      }
    }
  }
`

export default ListBooks;