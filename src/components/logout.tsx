import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {ACCESS_TOKEN_COOKIE_NAME} from "@/lib/consts"

export default function Logout(this: any) {
    const router = useRouter();
    function logout() {
        Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
        router.push({
            pathname: "/",
        });
    }

  return (
    <Button variant="outline" onClick={logout}>Logout</Button>
  );
}
