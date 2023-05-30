export function Loader () {

    return (

        <dialog className="loader loader--active">

            <a className="loader__logo" href="#">
                <img className="loader__image" src="/assets/img/logo/G-Clima-logo-xxl.png" alt="logo G-Clima" />
            </a>
            <h2 className="loader__heading"> G-Clima </h2>
            <div className="loader__box">
                <img className="loader__icons" src="/assets/img/icons/loader-icons.svg" alt="iconos del clima" />
            </div>

        </dialog>

    );

};