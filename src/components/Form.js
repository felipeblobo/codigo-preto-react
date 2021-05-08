import SelectCountry from "./SelectCountry";

function Form() {
  const selectValues = [
    {value: 'australia', text: "Austrália"},
    {value: 'brazil', text: 'Brasil'},
    {value: 'USA', text: 'Estados Unidos'},
    {value: 'mongolia', text: 'Mongólia'},
    {value: 'cuba', text: 'Cuba'},
    {value: 'italia', text: 'Itália'},
    {value: 'africa do sul', text: 'África do Sul'},
    {value: 'china', text: 'China'},
    {value: 'melhor pais do mundo', text: 'Melhor País do Mundo'}
  ]

  return (
    <form className="space">
     <SelectCountry apiValues = { selectValues } />
    </form>
  )
}

export default Form
