import Head from "next/head";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/login.module.css";
import ThisButton from "@/components/loginbutton";
import { useMutation, useQueryClient } from "react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { login } from "../../services/apiLogin";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation({
    // queryKey: ["login"],
    mutationFn: login,
    onSuccess: async (data: any) => {
      // Invalidate and refetch
      console.log(data.access_token)
      Cookies.set("access_token", data.access_token);
      router
        .push({
          pathname: "/dashboard",
        })
        .then(() => {
          router.reload();
        });
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    return mutation.mutate({
      email: username,
      password: password,
    });
    // onSubmit({ email, password });
  };

  return (
    <>
      <main className={styles.body}>
        <p>
          <title>CS320 Geocities Login GUI</title>
        </p>
        {/* <div className="col -md-6 no no-gutters"> */}
        <form onSubmit={handleSubmit}>
          <div className={styles.center}>
            <div className={styles.wrapper}>
              <h2>Sign-In</h2>
              <br />
              <div className={styles.username}>
                <h3>Username</h3>
                <input
                  id="myUsername"
                  // className="non-preview"
                  defaultValue={"username"}
                  value={username}
                  onChange={handleUsernameChange}
                />
                <br />
              </div>
              <div className={styles.password}>
                <h3>Password</h3>
                <input
                  // id="myPassword"
                  type="password"
                  // className="non-preview"
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
                Click Here!
              </button>
              {errorMessage && (
                <div className={styles.error}><p>
                  Wrong Username or Password 
                </p></div>
              )}
              {/* <ThisButton onClick={handleSubmit}/> */}
            </div>
          </div>
        </form>
        {/* </div> */}
        <p />
      </main>
    </>
  );
}
