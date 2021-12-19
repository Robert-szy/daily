/* selectors */
export const getAllOrders = ({ orders }) => orders;
export const getCountOrders = ({ orders }) => orders.length;


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
