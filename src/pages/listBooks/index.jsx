import React, { useEffect } from "react";
import ListBooks from './style';
import { useSelector, useDispatch } from 'react-redux';
import { loadRequestBooks } from '../../store/ducks/books/actions';
import Header from "../../components/header";
import banner from '../../images/banner.png';

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
      <Header />
      <ListBooks>
          <div className="container">
            <div className="banner">
              <img src={banner} alt="Banner" />
            </div>

            <div className="listBooks">
              { 
                booksState.map((item, key) => (

                    <div className="card" key={key}>
                      <div className="img" style={{ backgroundImage: `url(${item.img})` }}></div>
                      <div className="info">
                        <h2>{item.title}</h2>
                        <h3>{item.author}</h3>
                      </div>

                      <a href={`/view-books/${item.id}`} type="button">Ver mais detalhes</a>
                    </div>
                  )
                )
              }
            </div>
          </div>
      </ListBooks>
    </>
  );
};

export default PageListBooks;