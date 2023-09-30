import CategoryPage from '@/components/template/CategoryPage';
import React from 'react';

const index = ({data}) => {
    console.log(data);
    return (
        <div>
            <CategoryPage data={data}/>
        </div>
    );
};

export default index;
export async function getServerSideProps(context){
    const {query:{time , difficulty}}= context;
    console.log(time , difficulty);
    const res = await fetch("http://localhost:4000/data");
    const data = await res.json();

    const FiltededData = data.filter((item) => {
        const difficultyFilter = item.details.filter((detail) => detail.Difficulty && detail.Difficulty === difficulty);
        const timeFilter = item.details.filter((detail) => {
            const cookingTime = detail["Cooking Time"] || "";
            const [Ctime] = cookingTime.split(" ");
            if(time=== "less" && Ctime && +Ctime < 30){
                return detail
            }else if(time=== "more" && Ctime && +Ctime > 30){
                return detail
            }
        });
        if(time && difficulty && difficultyFilter.length && timeFilter.length ){
            return item
        }else if(!time && difficulty && difficultyFilter.length){
            return item
        }else if(time && !difficulty && timeFilter.length){
            return item
        }
    } )

    return {
        props: {data :FiltededData}
    }
}