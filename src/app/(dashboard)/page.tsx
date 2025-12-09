import {HomeView} from "@/modules/home/ui/view/home-view";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";
import {caller} from "@/trpc/server";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect("/sign-in")
  }

  return <HomeView/>
}
