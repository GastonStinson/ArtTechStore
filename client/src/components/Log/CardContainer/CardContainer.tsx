import React from 'react'
import { useSelector } from "react-redux";
import Paginate from '../Paginado/Paginado';





const CardContainer=()=>{
    const artGallery = useSelector(state=>state.artGallery);
    const {numPage}=useSelector(state=>state);
    const cantPerPage = 20;
    const desde = (numPage - 1) * cantPerPage; 
    const hasta = numPage * cantPerPage;       

    const cantPage = Math.floor(artGallery.length / cantPerPage);


  // 0,1,2,3    4,5,6,7   8,9,10,11
  const viewArt = artGallery?.slice(desde, hasta);

  console.log("#####num page", numPage) 
    return(
        <div>
        <div>
            {viewArt?.map(artGallery=>{
    
            })}
        </div>
        <div>

        </div>
        <Paginate numPage={numPage} cantPage={cantPage} />
    </div>
    )
}

export default CardContainer;