
import React, { useState} from 'react'
import { connect } from 'react-redux';
import NewUser from './NewUser'
import Users from './Users'


const Index = props => {
    const [view, setView] = useState(1);

    // main functions
    
    const currentView = () => {
        switch (view) {
            case 1:
                return <Users changeView={(view)=> setView(view)}/>;
            case 2:
                return <NewUser changeView={(view)=> setView(view)
                } />;
            default:
                return <Users changeView={(view)=> setView(view)}/>;
        }
    }

    return (
        currentView()
    );
}

const mapStateToProps = state => {
    return {
        authUser: state.sessionState.authUser,

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

