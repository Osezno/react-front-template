
import React, { useState } from 'react'
import NuevoFormulario from './NuevoFormulario'
import VerFormulario from './VerFormulario'
import Formularios from './Formularios'

const Index = props => {
    const [view, setView] = useState(1);


    const currentView = () => {
        switch (view) {
            case 2:
                return <NuevoFormulario changeView={(view) => setView(view)} />;
            case 3:
                return <VerFormulario changeView={(view) => setView(view)} />;
            case 1:
                return <Formularios changeView={(view) => setView(view)
                } />;
            default:
                return <Formularios changeView={(view) => setView(view)} />;
        }
    }

    return (
        currentView()
    );
}



export default Index;

