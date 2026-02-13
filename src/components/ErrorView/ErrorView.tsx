interface ErrorViewProps {
  message: string
  onRetry: () => void
}

/**
 * Компонент отображения ошибки
 *
 * @param {string} message - текст ошибки
 * @param {() => void} onRetry - функция, вызываемая при клике на кнопку "Повторить попытку"
 */
const ErrorView = ({ message, onRetry }: ErrorViewProps) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onRetry}>Повторить попытку</button>
    </div>
  )
}

export default ErrorView
