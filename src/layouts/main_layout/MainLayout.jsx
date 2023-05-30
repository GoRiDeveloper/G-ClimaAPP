import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";

export function MainLayout (props) {

    return (

        <main className="layout">
            {
                props.loader
                    ? ( <Loader /> )
                    : (
                        <>
                            <Header 
                                darkMode={props.darkMode}
                                handleTheme={props.handleTheme}
                                handleSubmit={props.handleSubmit}
                            />
                            <section className="layout__content"> {props.children} </section>
                        </>
                    )
                    
            }
        </main>
        
    );

};