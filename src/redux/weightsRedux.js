/* selectors */
export const getAllWeights = ({ weights }) => weights;
export const getCountWeights = ({ weights }) => weights.length;


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
