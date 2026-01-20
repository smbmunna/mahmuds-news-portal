import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const NewsCard = ({ title, description, image, category, source, dateCreated }) => {
    const axiosSecure= useAxiosSecure(); 
    const handleSubmit= ()=>{
        const newsData= {
            title: title, 
            description: description, 
            category: category, 
            source: source
        }
        axiosSecure.post('/news', newsData)
        .then(res=>{
            console.log(res.data); 
        })
    }
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
                        <button className="btn btn-warning" onClick={handleSubmit}>
                            Save to Database
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsCard; 