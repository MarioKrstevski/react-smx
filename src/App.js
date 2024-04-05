import "./App.css";
import GSHeader from "./components/GSHeader";
import Logo from "./components/Logo";
import Settings from "./components/Settings";
// JSX
function Heading1() {
  return (
    <h1 className="h1Naslov">
      Welcome
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nulla excepturi est itaque fugit!
        <a href="">
          <img src="" alt="" />
        </a>
      </p>
    </h1>
  );
}

function Kukja() {
  return (
    <>
      {/* <Soba>
        <Kujna />
        <Frizider>
          <Mleko></Mleko>
        </Frizider>
        <Masa></Masa>
        <Stolce></Stolce>
        <Stolce></Stolce>
      </Soba>
      <Soba>
        <Krevet>
          <David />
        </Krevet>
        <Krevet>
          <Mario />
        </Krevet>
      </Soba> */}
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <Logo></Logo>
      <Settings></Settings>
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}

function Sidebar() {
  return <nav></nav>;
}

function Main() {
  return (
    <main>
      <section></section>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <GSHeader />
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
