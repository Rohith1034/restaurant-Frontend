import Skeleton from "react-loading-skeleton";

function SkeletonWishlistCard() {
    return <div style={{display:"flex",marginTop:"3%"}}>
        <Skeleton width={250} height={200}/>
        <div style={{marginLeft:"30px",marginTop:"40px"}}>
            <Skeleton width={150} height={18}/>
            <Skeleton width={250} height={18}/>
            <Skeleton width={350} height={18}/>
            <Skeleton width={450} height={18}/>
        </div>
    </div>;
}

export default SkeletonWishlistCard; 