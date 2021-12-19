/* selectors */
export const getAllPots = ({ pots }) => pots;
export const getCountPots = ({ pots }) => pots.length;


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
