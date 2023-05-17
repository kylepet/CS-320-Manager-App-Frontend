import React, { useState } from "react"
import styles from "@/styles/login.module.css"
import { useMutation } from "react-query"
import { useRouter } from "next/router"
import { AUTH } from "@/lib/auth"
import { API } from "@/lib/api"

export default function Home() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const studentDashboard = "/studentdashboard"
  const profDashboard = "/dashboard"

  const mutation = useMutation({
    mutationFn: API.signin,
    onSuccess: async (data) => {
      AUTH.set(data.access_token)

      // If the user is a student, we redirect to the student dashboard.
      // Otherwise, redirect to the student dashboard.
      const pathname = data.isStudent ? studentDashboard : profDashboard

      router.push({ pathname }).then(() => {
        router.reload()
      })
    },
    onError: (error: any) => {
      setErrorMessage(error.response.data.message)
    },
  })

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    return mutation.mutate({
      email: username,
      password: password,
    })
  }

  return (
    <>
      <main className={styles.body}>
        <p>
          <title>CS320 Geocities Login GUI</title>
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.center}>
            <div className={styles.wrapper}>
              <h2>Sign-In</h2>
              <br />
              <div className={styles.username}>
                <h3>Username</h3>
                <input
                  id="myUsername"
                  defaultValue={"username"}
                  value={username}
                  onChange={handleUsernameChange}
                />
                <br />
              </div>
              <div className={styles.password}>
                <h3>Password</h3>
                <input
                  type="password"
                  defaultValue={"password"}
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                id="myBtn"
                className={styles.button}
              >
                Login
              </button>
              {errorMessage && (
                <div className={styles.error}>
                  <p>Wrong Username or Password</p>
                </div>
              )}
            </div>
          </div>
        </form>
        <p />
      </main>
    </>
  )
}
