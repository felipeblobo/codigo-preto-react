import PropTypes from "prop-types";

function SelectCountry(props) {
  const apiValues = props.apiValues;
  return (
    <>
      <label htmlFor="id-pais">Selecione o país</label>
      <select id="id-pais" name="pais" defaultValue="0">
        <option value="0" disabled>
          Selecione
        </option>
        {apiValues.map((item, index) => {
          return (
            <option key={index} id={item.value + index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      <button id="botao" type="submit">
        Consultar
      </button>
    </>
  );
}

SelectCountry.propTypes = {
  apiValues: PropTypes.array,
};

SelectCountry.defaultProps = {
  apiValues: [
    { value: 'brazil', text: 'Brasil'}
  ]
}
export default SelectCountry;
