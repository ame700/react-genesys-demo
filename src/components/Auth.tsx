import { FormEvent, useState } from 'react';
import './Auth.css';
import useAuth from '../hooks/useAuth';
import { GuxButton, GuxRadialLoading } from 'genesys-spark-components-react';
import Header from './Header';
import Card from './Card';
import { useSelector } from 'react-redux';
import { IAuthState } from '../features/authSlice';

export default function Auth() {
  const { checkAuthToken, authenticateWithPkce } = useAuth();
  
  // const authLoading = useSelector((state: IAuthState) => state.auth.authLoading);
  // const authError = useSelector((state: IAuthState) => state.auth.authError);
  // const [token, setToken] = useState('');
  // const [env, setEnv] = useState('dca');


  return (
    <div className='auth-container'>
      {/* <Header></Header>
      <Card className={undefined}>
        <div className="auth-content">
          <form onSubmit={authenticate}>
            <div>
              <label htmlFor="environments">Env:</label>
              <select name="environments" id="env-selector" onChange={(e) => setEnv(e.target.value)}>
                <option value="pca-us">Prod</option>
              </select>
            </div>
          <div>
            <label htmlFor="auth-input">Manual Token: </label>
            <input type="text" id="auth-input" name="auth-input" onChange={(e) => setToken(e.target.value)}/>
          </div>
          <div className="auth-buttons">
            <GuxButton type="submit" onClick={authenticate}>Use Manual Token</GuxButton>
            <GuxButton type="button" onClick={authenticateWithCode}>Authenticate</GuxButton>
          </div>
          {errorMessage()}
          {authSpinner()}
          </form>
        </div>
      </Card> */}

    </div>
  )
}
