import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sepeteEkle } from '../actions'

const Products = props => {
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>

      {props.datam.data.map((item) => (
        <div key={item.id} className="book">
          <img src={item.image} alt="Simyaci" />
          <div>
            <h4>{item.name}</h4>
            <p>{item.author}</p>
            <p>Fiyat: &#8378; {item.price}</p>
            <button onClick={()=> 
  {          props.sepeteEkle(item)
  }
            }>Sepete Ekle</button>
          </div>
        </div>
      ))}

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    datam: state,
  };
};

export default connect(mapStateToProps, { sepeteEkle })(Products);