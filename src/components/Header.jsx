export function Header ({ darkMode, handleTheme, handleSubmit }) {

    return (

        <header className="header">

            <a className="header__logo" href="#">
                <img className="header__image" src="/assets/img/logo/G-Clima-logo-xxl.png" alt="logo de G-Clima" />
                <h1 className="header__heading"> Weather App </h1>
            </a>
            <div className="header__themeToggler" onClick={handleTheme}>
                <button 
                    className={
                        `header__themeBtn 
                        ${darkMode ? "" : "header__themeBtn--active"} 
                        header__lightTheme`
                    }
                >
                    <img className="header__themeIcon" src="/assets/img/icons/01d.svg" alt="sol" />
                </button>
                <button 
                    className={
                        `header__themeBtn 
                        ${darkMode ? "header__themeBtn--active" : ""} 
                        header__darkTheme`
                    }
                >
                    <img className="header__themeIcon" src="/assets/img/icons/01n.svg" alt="luna" />
                </button>
            </div>
            <form className="header__search" onSubmit={handleSubmit}>
                <button className="header__searchBtn">
                    <svg className="header__searchIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                    </svg>
                </button>
                <input 
                    id="search"
                    className="header__inputSearch" 
                    type="text" 
                    placeholder="Busca una ciudad" 
                />
            </form>

        </header>

    );

};