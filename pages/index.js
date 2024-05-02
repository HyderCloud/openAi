import Link from "next/link";
import Image from "next/image";
import {useUser} from "@auth0/nextjs-auth0/client"
export default function Home() {
  const {user} = useUser()
  
  return <div>
    {!!user ? <div> <Image src={user.picture} alt={user.name} height={50} width={50}/>
    <div>{user.email}</div>    
      <Link href={'/api/auth/logout'}>logout</Link></div>:
    <Link href={'/api/auth/login'}>login</Link>
    }
  </div>;
}
