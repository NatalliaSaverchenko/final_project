export const LoginForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleFormChange}
      />
      <button>Login</button>
      {errors && <p>{errors}</p>}
    </form>
  )
}
