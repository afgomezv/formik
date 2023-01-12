import { Form } from "./components/Form";

const App = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialState={{ text: "desde App", email: "test@email.com" }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="text"
              value={values.text}
              onChange={handleChange}
              name="text"
            />
            <input
              type="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default App;
