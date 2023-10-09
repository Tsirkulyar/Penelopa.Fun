import Layout from "../src/component/Layout";
import TemInfo from "../src/component/TemInfo";
import BlockRead from "../src/component/BlockRead"

export const getStaticPaths = async () =>{
    const response = await fetch ('http://localhost:4200/astrology/');
    const data = await response.json();

    const paths = data.map(({id}) =>({
        params: {id: id.toString()},
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) =>{
    console.log(context)
    const {id} = context.params;
    const response = await fetch (`http://localhost:4200/astrology/${id}`);
    const data = await response.json();
             if(!data){
                return{
                    notFound: true,
                }
             }
        return{
            props: {text: data}
        }
    }

const IdPageSex =({text})=>{
    return(<>
    <Layout>
       <TemInfo text={text}/>
       <BlockRead/>
       </Layout>
    </>)
}
export default IdPageSex