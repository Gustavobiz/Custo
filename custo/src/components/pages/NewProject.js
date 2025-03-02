import styles from "./NewProject.module.css";
import { useHistory } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
function NewProject() {
  const history = useHistory();
  function createPost(project) {
    project.cost = 0;
    project.services = [];
    fetch("http://localhost:5000/projects");
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <p>Formulário:</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;
