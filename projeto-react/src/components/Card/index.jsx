import '../../styles/css/Card.css'

const Card = (props) => {
    console.log(props)
    const { text, change, id } = props; // text = props.text



    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-remove" onClick={() => change(id)}>X</div>

                <div className="card-text">
                    <p className="card-text-p">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;