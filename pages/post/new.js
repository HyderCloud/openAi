import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components";
export default function NewPost(props) {
    console.log(props)
    return (<div>this next</div>)
  }
  
NewPost.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}
export const getServerSideProps = withPageAuthRequired(()=>{
    return{
        props:{
         
        }
    } 
})