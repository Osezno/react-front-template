

import ContentStyle from './Content.style'
import Text from '../../components/Text/Text'
import colors from '../../constants/colors';
import CircleIcon from '../../components/Icons/CircleIcon'
import React, {useState, useEffect } from 'react'
import PokemonCards from '../../components/Cards/pokemonCards';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = ContentStyle

const Profile = props => {
    const { pokemon } = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currentAttack, setCurrentAttack] = React.useState(false);
    const { moves, types, species, abilities } = pokemon
    const pokemonName = {
        textTransform: 'capitalize',
        marginTop: '10px',
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const getInfo = async () => {
        let tempAbilities = []
        let tempSpecies = []
        let tempTypes = []
        Promise.all(
            types.map(async pokeQuery => {
                const res = await fetch(pokeQuery.type.url)
                const type = await res.json()
                tempTypes.push(type)
            })
        ).then(() => {
            console.log(tempTypes)
        })

        console.log(abilities)
    }

    const openAttakModal = async (attak) => {
        const res = await fetch(attak.url)
        const cAttack = await res.json()
        console.log(attak, cAttack)
        setCurrentAttack(cAttack)
        handleOpen()
    }

    const renderPokemon = () => {

        return (
            <div className={classes.blackScreen} >
                <PokemonCards pokemon={pokemon} selected />
            </div >
        )
    }

    const renderModalContent = () => {
        console.log(currentAttack)
        return (<div className={classes.paper}>
            <Text style={pokemonName} color={colors.darkest} type="subtitle" >
                {currentAttack.name}
            </Text>
            <Text style={pokemonName}  color={colors.darkest} type="paragraph" >
                Power: {currentAttack.power}
            </Text>
            <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                Priotity: {currentAttack.priority}
            </Text>
            <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                PP: {currentAttack.pp}
            </Text>
            <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                Accuracy: {currentAttack.accuracy}
            </Text>
            <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                Type:  {currentAttack.type.name}
            </Text>
        </div>)
    }


    const renderInfo = () => {
        return (<>
            <Text style={pokemonName} color={colors.lightest} type="subtitle" >
                {pokemon.name}
            </Text>
            <Text style={pokemonName} color={colors.contrastDarker} type="paragraph" >
                Movimientos
            </Text>
            <div className={classes.moveGrid}>
                {moves.map((m, i) => <div className={classes.active} key={i} onClick={() => openAttakModal(m.move)}><Text style={pokemonName} color={colors.lightest} type="small" >
                    {m.move.name}
                </Text></div>)}
            </div>
        </>
        )
    }

    const blackScreen = () => {
        return (
            <div className={classes.blackScreen} />
        )
    }

    useEffect(() => {
        if (pokemon) {
            getInfo()
            renderPokemon()
        }
    }, [pokemon])

    return (

        <div className={classes.pokemonInfo}>
            <Text color={colors.light} type="paragraph">
                Pokemon Profile
            </Text>
            <div className={classes.ScreenContainer} >
                <div className={classes.buttonsWrapper} >
                    <CircleIcon size={7} color={colors.primary} type={"circle"} />
                    <CircleIcon size={7} color={colors.primary} type={"circle"} />
                </div>
                {!pokemon ? blackScreen() : renderPokemon()}
                <div className={classes.bigButton} >
                    <CircleIcon size={20} color={colors.primary} type={"circle"} />
                </div>
            </div>
            {pokemon ? renderInfo() : null}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {currentAttack ? renderModalContent() : null}
                </Fade>
            </Modal>
        </div >

    );
}

export default Profile;