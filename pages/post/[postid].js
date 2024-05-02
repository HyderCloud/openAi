import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function Home() {
    return <div>hello</div>;
  }
  

  export const getServerSideProps = withPageAuthRequired(()=>{
    return{
        props:{
         
        }
    } 
})