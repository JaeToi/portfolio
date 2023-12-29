import "../component_Css/Header.css";

function Header() {
  return (
    <header className="App_Header">
      <div className="App_Header_F">
        <h1 className="Header_h1">
          안녕하세요 개발자가 되고싶은 남자 <br />
          <p>
            <b className="My_Name">김재동</b> 입니다.
          </p>
        </h1>
        <div className="My_Metter">
          <h3>
            <p>age : 30</p>
            <p>email : kjd9309@gmail.com</p>
            email : kjd9309@gmail.com
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
