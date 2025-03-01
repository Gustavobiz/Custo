import styles from "./ProjectForm.module.css";
function ProjectForm() {
  return (
    <form className={styles.form}>
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
