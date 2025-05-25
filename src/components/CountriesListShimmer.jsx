import '../components/CountriesListShimmer.css'

const CountriesListShimmer = () => {

  return (
    <div className='countries-container'>
        {
            Array.from({length: 10}).map((ele, index) =>{
                return (
                  <div key={index} className="country-card shimmer-card"> 
                    <div className='flag-container'></div>

                    <div className="card-text">
                      <p></p>
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default CountriesListShimmer