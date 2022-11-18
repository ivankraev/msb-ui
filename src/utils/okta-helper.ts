import { v4 as uuidv4 } from 'uuid'
import pkceChallenge from 'pkce-challenge'

export const createOktaLink = (email?: string) => {
  const scopes = 'openid profile email'
  const state = 'test'
  const guid = uuidv4()
  const pkce = pkceChallenge(43).code_challenge
  const oktaLink = `${process.env.REACT_URL}/oauth2/v1/authorize?client_id=${process.env.REACT_CLIENT_ID}&response_type=code token&response_mode=fragment&scope=${scopes}&redirect_uri=${process.env.REACT_REDIRECT_URI}&state=${state}&nonce=${guid}&code_challenge_method=S256&code_challenge=${pkce}&login_hint=${email}`
  return oktaLink
}
