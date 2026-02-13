import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useEffect } from 'react'
import { detailsRequested } from '../../store/services/actions'
import ErrorView from '../../components/ErrorView/ErrorView'
import {
  selectServiceDetailsData,
  selectServiceDetailsError,
  selectServiceDetailsLoading,
} from '../../store/services/selectors'
import Spinner from '../../components/Spinner/Spinner'

const ServiceDetailsPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectServiceDetailsData)
  const loading = useAppSelector(selectServiceDetailsLoading)
  const error = useAppSelector(selectServiceDetailsError)

  const nomericId = Number(id)

  useEffect(() => {
    if (Number.isNaN(nomericId)) return
    dispatch(detailsRequested(nomericId))
  }, [dispatch, nomericId])

  const handleRetry = () => {
    if (Number.isNaN(nomericId)) return
    dispatch(detailsRequested(nomericId))
  }

  if (loading) return <Spinner />
  if (error) return <ErrorView message={error} onRetry={handleRetry} />
  if (!data) return null

  return (
    <div>
      <h2>
        Детали услуг №{id} — {data.name}
      </h2>
      <p>Цена: {data.price} ₽</p>
      <p>{data.content}</p>
      <Link to="/">Обратно к списку</Link>
    </div>
  )
}

export default ServiceDetailsPage
