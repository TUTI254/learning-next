 import getUser from "@/lib/getUser"
 import getUserPosts from "@/lib/getUserPosts"
 import { Suspense } from "react"
import UserPost from "./components/UserPost"
import type  {Metadata} from "next"

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({params:{userId}}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user:User = await userData
    return {
        title: user.name,
        description: `This is the user page for ${user.name}`
    }
}
export default async function Userpage({params:{userId}}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData]) // Promise.all() takes an array of promises and returns a single promise that resolves to an array of the results of the input promises.

    const user = await userData
  return (
    <>
        <h2>{user.name}</h2>
        <br/>
        <Suspense fallback={<h2>Loading....</h2>}>
            <UserPost promise={userPostsData}/>
        </Suspense>
    </>
  )
}
