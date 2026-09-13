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
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
}
