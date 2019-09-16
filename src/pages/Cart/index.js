import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdShoppingBasket,
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th> </th>
                <th>Product</th>
                <th>Amount</th>
                <th>Subtotal</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>

                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>

                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="text" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>

                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>

                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <Total>
              <span>Total</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      ) : (
        <div>
          <MdShoppingBasket size={70} />
          <h3>Your cart is empty</h3>
          <Link to="/">
            <button type="button">Let&apos;s get something</button>
          </Link>
        </div>
      )}
    </Container>
  );
}
