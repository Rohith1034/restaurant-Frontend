import Skeleton from "react-loading-skeleton";
function ItemSkeleton() {
    return <div>
        <div className="custom-skeleton" style={{ display: "flex",flexDirection: "row",marginLeft:"0%"/*flexWrap:"wrap"*/}}>
            <div style={{ marginRight: "10px"}}>
                <Skeleton width="600px" height="550px" borderRadius="7px" />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "4%", marginTop: "2%", flexDirection: "column",flexWrap:"wrap"}}>
                <Skeleton width="400px" height="30px" />
                <div style={{ marginTop: "14%" }}>
                    <Skeleton width="500px" count={15} />
                </div>
                <div style={{marginTop:"5%",display:"flex",flexDirection:"row"}}>
                    <Skeleton width="250px" height="35px" style={{marginRight:"10px"}}/>
                    <Skeleton width="250px" height="35px"/>
                </div>
            </div>

        </div>
    </div>
}

export default ItemSkeleton;