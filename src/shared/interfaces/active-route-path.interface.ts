import { RouteProps } from '@msp/routes/main'
import { PathMatch } from 'react-router-dom'

export interface ActiveRoutePath {
  title?: string
  match: PathMatch<string>
  definition: RouteProps
}
