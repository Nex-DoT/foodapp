import CategoryPage from '@/components/template/CategoryPage';
import React from 'react';

const index = () => {
    return (
        <div>
            <CategoryPage/>
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
        console.log(difficultyFilter);
        const timeFilter = item.details.filter((detail) => {
            const cookingTime = detail["Cooking Time"] || "";
            const [Ctime] = cookingTime.split(" ");
            if(time=== "less" && Ctime && +Ctime < 30){
                return detail
            }else if(time=== "more" && Ctime && +Ctime > 30){
                return detail
            }
        })
        console.log(timeFilter);
    } )

    return {
        props: {FiltededData}
    }
}