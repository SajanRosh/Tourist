function TouristPlace({place,img,desc,price,visit}){
    return (
        <>
            <div className="p-3 border rounded-lg">
                <p className="text-center text-2xl text-blue-600 font-bold">Place : {place}</p>
                <p className="mt-3 text-sm text-neutral-500">{desc}</p>
                <div className="relative">
                    <img src={img}  className="w-full object-cover mt-3" alt="" />
                    {
                        price > 12000 ?  <div className="bg-orange-100 text-orange-700 top-0 absolute m-2 px-3 rounded-full py-1">Expensive</div> : <div className="bg-violet-100 text-violet-700 top-0 absolute m-2 px-3 rounded-full py-1">Cheaper</div>
                    }
                    {
                        visit === 'Summer' ? <div className="absolute right-2 top-0 text-cyan-600 bg-cyan-100 rounded-full px-3 py-1 mt-2">Best for Summmer</div> : <div className="absolute right-2 top-0 text-green-600 bg-green-100 rounded-full px-3 py-1 mt-2">Best for  Winter</div>
                    }
                    
                </div>
                
            </div>
        </>
    )
}


export default TouristPlace;