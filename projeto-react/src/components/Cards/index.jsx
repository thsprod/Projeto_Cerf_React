import Card from "../Card";


import '../../styles/css/Cards.css'

const Cards = (props) => {
    console.log('props')
    const { info, setCards } = props;

    const handleRemove = (id) => {
            setCards(info.filter((item, index) => index !== id))

    }

    return (
        <div className="cards">
            {
                info.map((item, index) => {
                    return (
                        <Card key={index} text={item} change={handleRemove} id={index} />
                    )
                })
            }
        </div>
    )
}


export default Cards;