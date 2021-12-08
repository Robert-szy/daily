/* selectors */
export const getAllMultipliers = ({ multipliers }) => multipliers;
export const getCountMultipliers = ({ multipliers }) => multipliers.length;


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
