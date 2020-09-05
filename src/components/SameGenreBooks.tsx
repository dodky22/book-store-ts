import React, { useContext } from "react";
import BookModel from "../models/BookModel";

import styles from "../assets/SameGenreBooks.module.css";

import { BookContext } from "../context/context";
import { Link } from "react-router-dom";

import Book from "./Book";

interface Props {
  genreMain: string;
}

const SameGenreBooks = (genreMain: Props) => {
  const context = useContext(BookContext);
  const { books } = context;
  //   console.log(genreMain.genreMain);

  let sameGenreBooks: BookModel[] = books.filter(
    (book: BookModel) => book.genre === genreMain.genreMain
  );

  let booksGenre = sameGenreBooks.map((book: BookModel, isbn: number) => {
    return <Book key={isbn} bookDetails={book}></Book>;
  });

  console.log(booksGenre);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>BOOK FROM SAME GENRE</h3>
      <div className={styles.wrapper}>
        <div className={styles.sameGenre}>
          <div className={styles.sameGenreFlex}>{booksGenre}</div>
        </div>
        <Link className={styles.link} to="/store">
          Store
        </Link>
      </div>
    </section>
  );
};

export default SameGenreBooks;
