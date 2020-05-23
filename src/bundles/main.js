const getOperands = ( postiveResult = false ) => {
  let operand1 = Math.floor(Math.random() * 10);
  let operand2 = Math.floor(Math.random() * 10);

  if ((postiveResult = true && operand1 < operand2)) {
    operand1 = operand2 + operand1;
  }
  return [ operand1, operand2];
};

const getOptions = (result) => {
  const options = [result, Math.floor(Math.random() * 10),  Math.floor(Math.random() * 10),  Math.floor(Math.random() * 100),  Math.floor(Math.random() * 100)]
  const optionsUniq = Array.from(new Set(options))
  return shuffle(optionsUniq.slice(0,4))
}
const shuffle = array => array.sort(() => Math.random() - 0.5)

export default {
  name: "main",
  getReducer: () => (state = [], { type, payload }) => {
    const { operands, result, options } = payload || {}
    if (
      type === "ADD" ||
      type === "SUBSTRACT" ||
      type === "MULTIPLY" ||
      type === "DIVIDE"
    ) {

      return { operands, result, options };
    }
    if(type === 'CLEAR_ALL') {
      return {}
    }

    return state;
  },
  selectOperands: (state) => state.main.operands,
  selectResult: (state) => state.main.result,
  selectOptions: (state) => state.main.options,
  doUpdateUrlToHome: () => ({ store, dispatch }) => {
    dispatch({
      type: 'CLEAR_ALL',
    })
    store.doUpdateUrl('/')
  },
  doAdd: () => ({ dispatch, store }) => {
    let [operand1, operand2] = getOperands();
    const result = operand1 + operand2
    const options = getOptions(result);
    dispatch({
      type: "ADD",
      payload: {operands: [operand1, operand2], options, result},
    });
    store.doUpdateUrl('/add')
  },
  doSubstract: () => ({ dispatch, store }) => {
    let [operand1, operand2] = getOperands(true);
    const result = operand1 - operand2
    const options = getOptions(result);
    dispatch({
      type: "SUBSTRACT",
      payload: {operands: [operand1, operand2], options, result},
    });
    store.doUpdateUrl('/substract')
  },
  doMultiply: () => ({ dispatch , store}) => {
    let [operand1, operand2] = getOperands();
    const result = operand1 * operand2
    const options = getOptions(result);
    dispatch({
      type: "MULTIPLY",
      payload: {operands: [operand1, operand2], options, result},
    });
    store.doUpdateUrl('/multiply')
  },
  doDivide: () => ({ dispatch, store }) => {
    let [operand1, operand2] = getOperands(true);
    const result = operand1 / operand2
    const options = getOptions(result);
    dispatch({
      type: "DIVIDE",
      payload: {operands: [operand1, operand2], options, result},
    });
    store.doUpdateUrl('/divide')
  },
};
