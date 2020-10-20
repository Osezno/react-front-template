// import React from 'react'
// import PropTypes from 'prop-types'
// import shadows from '../../constants/shadows';
// import borders from '../../constants/borders';
// import PokemonCardStyle from './pokemonCards.style'
// import { useState, useEffect } from 'react'

// const useStyles = PokemonCardStyle

// const PokemonCards = (props) => {
//     const { pokemon, selected, handleSelectPokemon } = props
//     const [Hovered, setHovered] = useState(false);
//     const [rotation, setRotation] = useState(false);
//     const { sprites } = pokemon
//     let interval = 0

//     const rotationActive = () => {
//          if(selected) interval  = setInterval(() => setRotation(!rotation), 500);
//     }

//     const rotationInactive = () =>{
//         if(selected) clearInterval(interval);
//     }

//     const classes = useStyles()

//     useEffect(() => {
//         if(selected) setTimeout(()=>  setRotation(!rotation), 500);
//     }, [rotation]);

//     let contentRendered =
//         <div className={selected ? classes.containerSelected : classes.container} onClick={() => !selected ? handleSelectPokemon(pokemon): null} >
//             {!rotation ?
//                 <img src={sprites.front_default} className={selected ? classes.pokemonSelected : classes.pokemonImage} />
//                 : <img src={sprites.back_default} className={selected ? classes.pokemonSelected : classes.pokemonImage} />
//             }
//         </div>;

//     return contentRendered
// }

// PokemonCards.defaultProps = {

// }

// PokemonCards.propTypes = {
//     pokemon: PropTypes.object,
// }

// export default PokemonCards
