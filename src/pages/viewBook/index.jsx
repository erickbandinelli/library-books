import React, { useEffect } from "react";
import ListBook from './style';
import { useParams } from "react-router-dom";
import { FaBarcode, FaCreditCard } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { loadRequestDetailsBook } from '../../store/ducks/detailsBook/actions';
import Header from "../../components/header";

const PageListBook = () => {
  const bookId = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequestDetailsBook(bookId.id));
  }, [bookId.id, dispatch]);
  
  const bookState = useSelector(
		(state) => state.DetailsBook.data
  );
  
  return (
    <>
      <Header />
      <ListBook>
          <div className="container">
            <div className="listBook">
              <div className="img" style={{ backgroundImage: `url(${bookState.img})` }}></div>
              <div className="info">
                <h2>{bookState.title}</h2>
                <h3>Autor: {bookState.author}</h3>
                <div className="infoBuy">
                  <span>R$ {bookState.valor}</span>
                  <ul>
                    <li><FaBarcode /> <span>Boleto Bancário: R$ {bookState.valor}</span></li>
                    <li><FaCreditCard /> <span>Em até 1x de R$ {bookState.valor} sem juros</span></li>
                  </ul>
                  <button type="button" className={bookState.status === 1 ? 'desable' : 'active'}>{bookState.status === 1 ? 'Já está Alugado' : 'Alugar'}</button>
                </div> 
              </div>
            </div>
          </div>
      </ListBook>
    </>
  );
};

export default PageListBook;