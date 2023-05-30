const ERROR_TYPES = {

    404: "No se pudo encontrar la región."

};

export function Error ({ error, setError }) {

    const 
    
    { message, status } = error,

    handleError = () => {

        const 
        
        ERRS   = Object.keys(ERROR_TYPES),
        STATUS = status.toString();

        if (ERRS.includes(STATUS))
            return ERROR_TYPES[status];

    },

    handleSetError = () => setError(null);

    return (

        <dialog className="error error--active">
            <section className="error__modal error__modal--active">

                <button
                    className="error__btn"
                    onClick={handleSetError}
                >
                    <img className="error__icon" src="/assets/img/icons/exit-icon.svg" alt="botón de salir" />
                </button>
                <div className="error__box">
                    <svg className="error__errorIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path className="error__path" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
                        <path className="error__path" d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
                    </svg>
                </div>
                <h2 className="error__heading"> ¡Ha Ocurrido Un Error Inesperado! </h2>
                <p className="error__message">{ handleError() }</p>
                <p className="error__message"> Error : "{ message }" </p>

            </section>
        </dialog>

    );

};