import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
                alt="Tennis"
              />
            </td>

            <td>
              <strong>Tennis cools for walks</strong>
              <span>$129.90</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="text" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>$259.80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish order</button>

        <Total>
          <span>Total</span>
          <strong>$1920.28</strong>
        </Total>
      </footer>
    </Container>
  );
}
