import { RouteProps } from '@msp/routes/main'
import { ActiveRoutePath } from '@msp/shared/interfaces/active-route-path.interface'
import { matchPath, useLocation } from 'react-router-dom'

const joinPaths = (paths: string[]): string => {
  return paths.join('/').replace(/\/\/+/g, '/')
}

const matchRouteDefinitions = (
  definitions: RouteProps[],
  locationPathname: string,
  parentPath = '',
): ActiveRoutePath[] => {
  const crumbs: ActiveRoutePath[] = []

  const dynamicRoutes: { [key: string]: number } = {}
  // Path that doesnt require breadcrumb navigation
  const ignoredPaths: { [key: string]: number } = { '/': 1, '/profile': 1, '/settings': 1 }

  definitions.forEach((definition) => {
    const pathPatternWithParent = joinPaths([parentPath, definition.path])

    const match = matchPath({ path: pathPatternWithParent, end: false }, locationPathname)
    // If we have dynamic routes they will stack with our exact routes and we need to exclude the dynamic ones.
    if (match) {
      if (!dynamicRoutes[match.pathname]) {
        dynamicRoutes[match.pathname] = 1
      } else {
        dynamicRoutes[match.pathname] += 1
      }
    }

    // if we have more than one path matching url, we need to remove it
    if (match && !ignoredPaths[definition.path] && dynamicRoutes[match.pathname] < 2) {
      crumbs.push({ match, definition, title: definition.title })
    }

    // checks if there are nested routes recursively
    if (definition.children) {
      const nestedMatches = matchRouteDefinitions(
        definition.children,
        locationPathname,
        pathPatternWithParent,
      )

      crumbs.push(...nestedMatches)
    }
  })

  return crumbs
}

export const useActiveRoutePaths = (routes: RouteProps[]): ActiveRoutePath[] => {
  const location = useLocation()
  const activeRoutePaths: ActiveRoutePath[] = matchRouteDefinitions(routes, location.pathname)

  // We want the last part of our breadcrumb to be the Header, so we exclude it from the breadcrumb
  if (activeRoutePaths.length > 1) {
    return activeRoutePaths.slice(0, activeRoutePaths.length - 1)
  }

  return activeRoutePaths
}
