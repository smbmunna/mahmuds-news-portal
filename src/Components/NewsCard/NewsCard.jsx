import { Link } from "react-router";


const NewsCard = ({ title, description, image, category, source, dateCreated }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 card-sm shadow-sm ">
                <figure>
                    <img
                        src={image}
                        alt="news" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div>
                        {category.map(cat => <div className="badge badge-soft badge-secondary">{cat}</div>
                        )}
                    </div>
                    <div>
                        Date: {dateCreated}
                    </div>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">
                            <Link to={source}>Source</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsCard; 