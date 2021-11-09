import 'tachyons';
// create each card
const Card =({id, img, name, occup, clickCard})=> {
        return(
            <>
            <div onClick={clickCard} id={id} className='tc grom bg-light-red br3 pa3 ma2 dib bw2 shadow-5 eachCard'>
                <img id={id} src={img} alt={name} className='eachImage'/>
                <div id={id}>
                    <h3 id={id}>Name: {name}</h3>
                    <h3 id={id}>Occupation: {occup}</h3>
                </div>
            </div>
            </>
        )   
}
export default Card;