import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '../../pages/Login/selectors'
import { NAVIGATION } from './config'

export const Header = () => {
  const { isAuth } = useSelector(authSelector)
  const navigationItems = useMemo(() => {
    const targetNavigationItems = isAuth ? 'PRIVATE' : 'PUBLIC'
    return NAVIGATION[targetNavigationItems]
  }, [isAuth])
  return (
    <div>
      {navigationItems.map(({ title, path }) => (
        <div key={title}>
          <NavLink to={path}>{title}</NavLink>
        </div>
      ))}
    </div>
  )
}
