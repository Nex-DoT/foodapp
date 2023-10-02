import MenuPage from "@/components/template/MenuPage";
const index = ({data}) => {
    return (
            <MenuPage data={data}/>
    );
};

export default index;

export async function getStaticProps(){
    const res = await fetch("https://foodappdata.vercel.app/data");
    const data = await res.json();
    
    return {
        props:{data},
        revalidate: 10 ,
    }
}