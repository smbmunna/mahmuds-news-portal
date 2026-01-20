import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Home = () => {
    const [countries, setCountries] = useState([]);
    const navigate= useNavigate(); 

    useEffect(() => {
        fetch('countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleSelectCountry = (code) => {
        fetch(`https://newsdata.io/api/1/latest?apikey=pub_8d3348ec0319466997ce59e93a60e686&country=${code}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Home page : {countries.length}</h1>
            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Click to select a Country  ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        countries.map(country => <li key={country.code}>
                            <a onClick={() => {
                                handleSelectCountry(country.code); 
                                navigate(`/countryNews/${country.code}`); 
                            }}>{country.name}</a>

                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Home; 