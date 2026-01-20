import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import NewsCard from "../../Components/NewsCard/NewsCard";



const CountryNews = () => {
    const { code } = useParams();
    const [countryNews, setCountryNews] = useState([]);

    const handleSelectCountry = (code) => {
        fetch(`https://newsdata.io/api/1/latest?apikey=pub_8d3348ec0319466997ce59e93a60e686&country=${code}`)
            .then(res => res.json())
            .then(data => setCountryNews(data.results))
            console.log(countryNews); 
    }

    useEffect(() => {
        handleSelectCountry(code);
    }, [])

    return (
        <div>Country news {countryNews.length}
            {
                countryNews.map(news => <NewsCard
                    title={news.title}
                    description={news.description}
                    image={news.image_url}
                    category={news.category}
                    source={news.source_url}
                    dateCreated={news.pubDate}
                    key={news.article_id} />)
            }
        </div>

    )

}

export default CountryNews; 