import React, { useEffect } from "react";
import ListBooks from './style';
import { useSelector, useDispatch } from 'react-redux';
import { loadRequestBooks } from '../../store/ducks/books/actions';

const PageListBooks = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequestBooks());
  }, [dispatch]);
  
  const booksState = useSelector(
		(state) => state.Books.data
  );
  console.log(booksState)
  
  return (
    <>
      <ListBooks>
          {
							booksState.map((item, key) => {
								return (
                  <div className="card" key={key}>
                    <div className="img" styled={{ backgroundImage: `url(${item.img})`}}></div>
                    <div className="info">
                      <h2>{item.title}</h2>
                      <h2>{item.author}</h2>
                      <h2>R$ {item.valor}</h2>
                    </div>

                    <button type="button">Alugar</button>
                  </div>
								)
							})
						}
      </ListBooks>
    </>
  );
};

export default PageListBooks;