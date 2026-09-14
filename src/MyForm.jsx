export default function MyForm() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formEl = event.currentTarget;
  //   const formData = new FormData(formEl);
  //   const email = formData.get("email");
  //   console.log(email);
  //   formEl.reset();
  // }

  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
    const description = formData.get("desctiption");
    console.log(description);
    const radio = formData.get("employementStatus");
    console.log(radio);
    const checkboxData = formData.getAll("fruits");
    console.log(checkboxData);
  }

  return (
    <section>
      <h1>Sign Up Form</h1>

      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="joe@email.com"
          defaultValue={"ma@ma"}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={123}
        />
        <br />
        <label htmlFor="description"></label>
        <textarea
          name="desctiption"
          id="description"
          defaultValue={"Desc"}
        ></textarea>
        <br />
        <label htmlFor="employementStatus">Unemployed</label>
        <input
          type="radio"
          id="employementStatus"
          name="employementStatus"
          value={"Unemployed"}
        />
        <br />
        <label htmlFor="employementStatus">Part-time</label>
        <input
          type="radio"
          id="employementStatus"
          name="employementStatus"
          value={"Part-time"}
        />
        <br />
        <label htmlFor="employementStatus">Full-time</label>
        <input
          type="radio"
          id="employementStatus"
          name="employementStatus"
          value={"Full-time"}
          defaultChecked={true}
        />
        <br />
        <label htmlFor="fruits">Apple</label>
        <input
          type="checkbox"
          name="fruits"
          id="apple"
          value={"Apple"}
          defaultChecked="true"
        />
        <label htmlFor="fruits">Orange</label>
        <input type="checkbox" name="fruits" id="orange" value={"Oragne"} />
        <label htmlFor="fruits">Grapes</label>
        <input type="checkbox" name="fruits" id="grapes" value={"Grapes"} />
        <button>Submit</button>
      </form>
    </section>
  );
}
