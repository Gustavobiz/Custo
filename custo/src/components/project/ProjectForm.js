function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="insira o nome do Projeto"></input>
      </div>
      <div>
        <input type="number" placeholder="insira o orçamento total"></input>
      </div>
      <div>
        {" "}
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <input type="submit" value="Criar projeto" />
    </form>
  );
}
export default ProjectForm;
