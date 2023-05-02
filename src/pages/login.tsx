import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/login.module.css";
import ThisButton from "@/components/loginbutton";
import { useMutation, useQueryClient } from "react-query";
import Cookies from 'js-cookie'
import { useRouter } from "next/router";
import { login } from "../../services/apiLogin";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    // queryKey: ["login"],
    mutationFn: login,
    onSuccess: async (data: any) => {
      // Invalidate and refetch
      Cookies.set("access_token", data.token);
      router
        .push({
          pathname: "/student",
        })
        .then(() => {
          router.reload();
        });
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });
  return (
    <>
      <main className={styles.body}>
        <p>
          <title>CS320 Geocities Login GUI</title>
        </p>
        {/* <div className="col -md-6 no no-gutters"> */}
        <form>
          <div className={styles.center}>
            <div className={styles.wrapper}>
              <h2>Sign-In</h2>
              <br />
              <div className={styles.username}>
                <h3>Username</h3>
                <input
                  id="myUsername"
                  className="non-preview"
                  defaultValue={""}
                />
                <br />
              </div>
              <div className={styles.password}>
                <h3>Password</h3>
                <input
                  id="myPassword"
                  className="non-preview"
                  defaultValue={""}
                />
              </div>
              <ThisButton />
            </div>
          </div>
        </form>
        {/* </div> */}
        <p />
      </main>
    </>
  );
}
