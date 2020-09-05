import React, { useContext } from "react";
import { BookContext } from "../../context/context";
import CartBookModel from "../../models/CartBookModel";

import styles from "../../assets/CheckoutForm.module.css";

interface Props {
  values: {
    firstname: string;
    lastname: string;
    adress: string;
    city: string;
    state: string;
    phone: number;
    email: string;
    delivery: string;
  };
  sum: number;
  currentStep: number;
  handleChange: (e: any) => void;
}

const FormSummaryDetails = ({
  values,
  currentStep,
  handleChange,
  sum,
}: Props) => {
  const context = useContext(BookContext);
  const { cart } = context;
  const {
    firstname,
    lastname,
    city,
    adress,
    state,
    phone,
    email,
    delivery,
  } = values;

  let deliveryRes = delivery.split(",");

  const summaryTotal = (cart: number, delivery: string) => {
    let delNum;
    if (delivery === "free") {
      delNum = 0;
    } else {
      delNum = parseInt(delivery);
    }
    return delNum + cart + " €";
  };

  const userDetailSummary = (
    <table className={styles.userDetailSummary}>
      <tbody>
        <tr>
          <th>First name:</th>
          <td>{firstname}</td>
        </tr>
        <tr>
          <th>Last name:</th>
          <td>{lastname}</td>
        </tr>
        <tr>
          <th>Adress:</th>
          <td>{adress}</td>
        </tr>
        <tr>
          <th>City :</th>
          <td>{city}</td>
        </tr>
        <tr>
          <th>State :</th>
          <td>{state}</td>
        </tr>
        <tr>
          <th>Phone :</th>
          <td>{phone === 0 ? "" : phone}</td>
        </tr>
        <tr>
          <th>Email :</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
  );

  const cartSummary = cart.map((item: CartBookModel, id: number) => {
    const { isbn, image, name, genre, author, price } = item.book;

    return (
      <>
        <tr key={id}>
          <td>
            <img
              src={image}
              alt="Img not found"
              style={{ width: "2rem", height: "3rem" }}
            />
          </td>
          <td>{name}</td>
          <td>{genre}</td>
          <td>{isbn}</td>
          <td>{author}</td>
          <td>{item.quantity}</td>
          <td>{price} €</td>
        </tr>
      </>
    );
  });

  if (currentStep !== 3) {
    return null;
  }
  return (
    <div style={{ width: "100%", padding: "0 1rem 1rem 1rem" }}>
      <h3 className={styles.yourOrderTitle}>Your order</h3>
      {userDetailSummary}

      <table className={styles.cartSummaryDetails}>
        <thead>
          <tr>
            <th>Item:</th>
            <th>Name:</th>
            <th>Genre:</th>
            <th>ISBN</th>
            <th>Author</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{cartSummary}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Cart total: </td>
            <td> {sum} €</td>
          </tr>
        </tfoot>
      </table>
      <p className={styles.clearfix}></p>
      <h4 className={styles.deliveryDetailsTitle}>Delivery details</h4>
      <div className={styles.deliveryDetails}>
        <div>
          <span>{deliveryRes[0]}</span>
          <span className={styles.deliveryPrice}>{deliveryRes[1]}</span>
        </div>
        <span className={styles.orderTotal}>
          Total: {summaryTotal(sum, deliveryRes[1])}
        </span>
      </div>
    </div>
  );
};

export default FormSummaryDetails;
