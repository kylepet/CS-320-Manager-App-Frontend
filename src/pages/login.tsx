import Head from "next/head";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/login.module.css";
import ThisButton from "@/components/loginbutton";
import {useMutation, useQuery, useQueryClient} from "react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {getProfile, login} from "../../services/apiLogin";
import {sectionDetails} from "../../services/apiSection";

const inter = Inter({ subsets: ["latin"] });

//Login page
export default function Login() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const studentDashboard = "/studentdashboard"
  const profDashboard = "/dashboard"
  //retrieval of components

  const mutation = useMutation({
    // queryKey: ["login"],
    mutationFn: login,
    onSuccess: async (data: any) => {
      // Invalidate and refetch
      console.log(data.access_token)
      Cookies.set("access_token", data.access_token);

      // Check if student or prof and redirect from login to student dashboard or professor dashboard
      if (data.isStudent){
        router
            .push({
              pathname: studentDashboard,
            })
            .then(() => {
              router.reload();
            });
      }
      else {
        router
            .push({
              pathname: profDashboard,
            })
            .then(() => {
              router.reload();
            });
      }
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (error: any) => { //error handler 
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });

  const handleUsernameChange = (event: { //setting username
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: { //setting password
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  //storage
  const handleSubmit = (event: { preventDefault: () => void }) => { 
    event.preventDefault();
    return mutation.mutate({
      email: username,
      password: password,
    });
  };

  return ( //HTML hard code for login page structures using the login.modules.css file
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
                <div className={styles.error}><p>
                  Wrong Username or Password 
                </p></div>
              )}
            </div>
          </div>
        </form>
        <p />
      </main>
    </>
  );
}
