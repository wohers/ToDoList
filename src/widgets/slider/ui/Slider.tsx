import { Link } from "react-router-dom"

export const Slider = () => {
  return (
    <div>
      <aside>
        <nav>
            <Link to={'/today'}>Сегодня</Link>
            <Link to={'/completed'}>Выполенные</Link>
        </nav>
      </aside>
    </div>
  )
}

