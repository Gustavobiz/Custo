import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
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
