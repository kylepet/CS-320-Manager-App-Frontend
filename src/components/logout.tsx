import React from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"
import { AUTH } from "@/lib/auth"

/**
 *
 * @returns {JSX} JSX button which clears the cookie representing an autheticated
 */
export default function Logout() {
  //Clears the cookie and pushes the entrypoint patch which is the login screen
  const router = useRouter()
  function logout() {
    AUTH.clear()
    router.push({
      pathname: "/",
    })
  }

  return (
    <Button variant="outline" onClick={logout}>
      Logout
    </Button>
  )
}
