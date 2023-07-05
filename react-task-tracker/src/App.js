function App() {
  const name = "Marin";
  const isLoggedIn = true; 

  return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {isLoggedIn ? name : "Guest"}</h2>
    </div>
  );
}

export default App;
