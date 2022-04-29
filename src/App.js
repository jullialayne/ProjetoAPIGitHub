import Layout from "./components/layout";


function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/83183478?v=4" alt="Avatar of user"/>
          <h1>Jullia Layne</h1>
          <h3>Username:</h3>
          <span>jullialayne</span>
        </div>
        <div>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
        </div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
