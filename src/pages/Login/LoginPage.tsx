import { useState } from 'react'
import gameworksLogo from '../../assets/gameworks.svg'
import './LoginPage.css'

function LoginPage() {
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { studentId, password })
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img src={gameworksLogo} className="logo" alt="Flow logo" />
          <h1 className="title">FLOW : Startup Bridge</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="number"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="학번"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            투자 시작하기
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage