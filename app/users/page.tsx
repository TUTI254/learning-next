import getAllUsers from "@/lib/getAllUser"
import Link from "next/link"

export const metadata = {
  title: 'User page',
  description: 'This is the user page',
}
export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log('Hello users')

    const content =(
        <section>
            <h2>
                <Link href="/">Back Home </Link>
            </h2>
            <br/>
            {users.map((user) => {
                return (
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br/>
                    </>
                )
            })}
        </section>
    )

  return content
}
