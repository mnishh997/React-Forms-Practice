export default function MyForm() {
  return (
    <>
      <section>
        <h1>Sign Up Form</h1>
      </section>
      <form>
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
    </>
  );
}
