import styles from './card.module.css'

function Card(props) {
    const { author, country, imageLink, language, link, pages, title, year } = props.book
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <img src={imageLink} class="card-img-top" alt="Book image..."></img>
                    <h5 className="card-title">Author: {author}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Title: {title}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Counrtry: {country}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">language: {language}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Year: {year}</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">pages: {pages}</h6>
                <p className="card-text"></p>
                <a href={link} className="card-link">BOOK</a>
            </div>
        </div>
        </div >
    )
}

export default Card