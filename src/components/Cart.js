import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { sepetteEksilt } from "../actions";
import { sepettenCıkar } from "../actions";


const Cart = (props) => {

const toplam = props.datam.data2.map(ittem=> ittem.price * ittem.count )
const reducer = function (a, b) {
    return a + b }
const sum = toplam.reduce(reducer, 0).toFixed(2);

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378; {sum} </h3>

      {props.datam.data2.map((book) => (
        <div key={book.id} className="book">
          <img src={book.image} alt="Simyaci" />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378; {book.price.toFixed(2)}</p>
            <p>Toplam: &#8378; {(book.price * book.count).toFixed(2)}</p>
            <p>sepetinizde bu üründen {book.count} adet var </p>

            <button onClick={() => props.sepetteEksilt(book)}>-</button>
            <button onClick={() => props.sepettenCıkar(book)}>
              Sepetten Çıkar
            </button>
            <button onClick={() => props.sepeteEkle(book)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    datam: state,
  };
}

export default connect(mapStateToProps, {
  sepeteEkle,
  sepetteEksilt,
  sepettenCıkar
})(Cart);
