import { useEffect, useState } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButtom from "../form/SubmitButtom";

import styles from "./ProjectForm.module.css";

function ProjectForm({ handleSubmit, btnText, ProjectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(ProjectData || {});
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventeDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="insira o orçamento total"
        handleOnChange={handleChange}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButtom text={btnText} />
    </form>
  );
}
export default ProjectForm;
