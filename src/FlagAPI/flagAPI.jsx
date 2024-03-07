import React from 'react'


async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    .then((data => data.json()));
    // const data = await response.json();
    return response;
  }

function flagAPI() {

    const [data, setData] = useState([])

    useEffect( () => {
      async function fetchData() {
        const res = await getData()
        setData(res)
      }
      fetchData()
    },[])
  
    // console.log(data.name)
    data.map( (item) => console.log(item.name.common))
    
  return (
    <div>flagAPI</div>
  )
}

export default flagAPI