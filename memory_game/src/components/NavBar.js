const NavBar = ({score, tScore})=>{
return(
    <div>
        <nav id='navBar'>
            <h1 className='headLine'>Superheroes Memory Game</h1>
            <p className='headLine'>Score: {score}</p> <p className='headLine'>Top score:{tScore}</p>
            <h3 className='headLine'>Get points by clicking on an image be carefull not to click on the same image twice!</h3>
        </nav>
    </div>
)
}
export default NavBar