import React from 'react';
import Tender from "./Tender";

const Tenders = ({tenders, loading}) => {
    if (loading){
        return <h2 className={'primary-text mt-5 ml-5' }>LOADING...</h2>
    }
    else{
        return (
            <div>
                {tenders.map((tender, index) => <Tender key={index}
                                                        name={tender.name}
                                                        id={tender.id}
                                                        cost={tender.cost}
                                                        location={tender.location} />)
                }
            </div>
        );
    }

};

export default Tenders;