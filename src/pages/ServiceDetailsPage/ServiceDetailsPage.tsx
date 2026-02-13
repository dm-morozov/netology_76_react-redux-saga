import { Link, useParams } from 'react-router-dom'

const ServiceDetailsPage = () => {
  const { id } = useParams()

  return (
    <div>
      <h2>Детали услуг № {id}</h2>
      <Link to="/">Обратно к списку</Link>
    </div>
  )
}

export default ServiceDetailsPage
