import { Link } from "react-router-dom"


const CountryCard = ({name, flag, population, region, capital, data}) => {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img height={200} src={flag} alt={`${name} Flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard