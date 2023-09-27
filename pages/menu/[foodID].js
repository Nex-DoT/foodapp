import { redirect } from "next/dist/server/api-utils";

const foodID = ({data}) => {
    return (
        <div>
            {console.log(data)}
        </div>
    );
};

export default foodID;


export async function getStaticPaths(){
    const res = await fetch('http://localhost:4000/data');
    const data = await res.json();
    const slicedData = data.slice(0,10);

    const paths = slicedData.map((data) => ({
        params: {foodID: data.id.toString()},
    })) 
    
    return{
        paths,
        fallback:true,
    }
}
export async function getStaticProps(context){
        const {
            params: {foodID}
        } = context
        const res = await fetch(`http://localhost:4000/data/${foodID}`);
        const data = await res.json();
       if(!data.id){
        return{
            notFound:true,
        }
       }
        return{
            props: {data},
            revalidate : 30
        }
    }