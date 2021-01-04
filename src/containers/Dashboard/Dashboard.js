import React, { useState, useEffect } from 'react'
import ContentStyle from './Content.style'
import Menu from './Menu'
import MenuIcons from './MenuIcons'
import Panel from './Panel'


const useStyles = ContentStyle

const Dashboard = props => {
    const {toggle, view} = props
    const css = useStyles();
    let dashboard = [css.container, css.dashboard].join(' ')
    let dashboardClosed = [css.container, css.dashboard2].join(' ')
    
    // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    // const [urls, setUrls] = useState(false);
    // const [next, setNext] = useState(false);
    // const [back, setBack] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [currentPokemon, setCurrentPokemon] = useState(false);
    //Functions to handle info beetween components
    // const selectPokemon = (pokemon) => {
    //     setCurrentPokemon(pokemon)
    // }

    // const changePage = (url, index) => {
    //     if (url) setUrl(url)
    //     setCurrentPage(index)
    // }

    // const selectPage = (number) => {
    //     let url;
    //     if (number === 1) url = "https://pokeapi.co/api/v2/pokemon"
    //     else url = `https://pokeapi.co/api/v2/pokemon?offset= ${(number - 1) * 20} &limit=20`
    //     changePage(url)
    //     setCurrentPage(number)
    // }

    // const arrow = (type, index) => {
    //     let url = (type === "next") ? next : back
    //     return (
    //         <CircleIcon className={classes.active} size={40} type={type} onClick={() => changePage(url, index)} />
    //     )
    // }

    // const arrowDisable = (type) => {
    //     let url = (type === "next") ? next : back
    //     return (
    //         <CircleIcon size={40} color={colors.primary} invert type={type} />
    //     )
    // }

    // const search = async () => {
    //     const res = await fetch(url)
    //     const posts = await res.json()
    //     if (posts) {
    //         setUrls(posts)
    //         if (posts.next) setNext(posts.next)
    //         else setNext(false)
    //         if (posts.previous) setBack(posts.previous)
    //         else setBack(false)
    //     }
    // }

    // useEffect(() => {
    //     if (url) search()
    // }, [url])
    

    return (
        <div className={toggle ? dashboard :  dashboardClosed}>
            {toggle ? <Menu/>: <MenuIcons/>}
            <panel />
            {/* <Profile  /> */}
            {/* <div className={classes.searchContent}>
                {back ? arrow("back", currentPage - 1) : arrowDisable("back")}
                <div className={classes.searchDisplay}>
                    <List urls={urls} handleSelectPokemon={selectPokemon} />
                </div>
                {next ? arrow("next", currentPage + 1) : arrowDisable("next")}
            </div> */}
        </div>

    );
}

export default Dashboard;