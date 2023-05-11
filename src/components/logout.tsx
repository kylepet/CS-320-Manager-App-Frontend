import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Logout(this: any) {
    const router = useRouter();
    function logout() {
        Cookies.remove("access_token");
        router.push({
            pathname: "/",
        });
    }

  return (
    <Button variant="outline" onClick={logout}>Logout</Button>
  );
}
