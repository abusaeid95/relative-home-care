import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDatails = () => {
    const {serviceId} =useParams()
    const [serviceDetails, setserviceDetails] = useState([])

    useEffect(() => {
      fetch('/services.json')
        .then(res => res.json())
        .then(data => setserviceDetails(data))
    }, []);


    const matchService = serviceDetails.filter(service=>service.id==serviceId)
    console.log(matchService);
    return (
        <div><img src={matchService[0]?.img} alt="" />
            <h1>{matchService[0]?.name}</h1>
            <h1>{matchService[0]?.description}</h1>
           
        </div>
    );
};

export default ServiceDatails;