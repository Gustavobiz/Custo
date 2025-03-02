import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
function NewProject() {
  const navigate = useNavigate();
  function createPost(project) {
    project.cost = 0;
    project.services = [];
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <p>Formulário:</p>
      <ProjectForm headleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;
/*h
h
h
h
hg]g]
g
g
g
g
g
GETg
hh
*/
