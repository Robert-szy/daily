/* selectors */
export const getAllPortions = ({ portions }) => portions;
export const getCountPortions = ({ portions }) => portions.length;


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
