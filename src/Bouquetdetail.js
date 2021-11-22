import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

export function Bouquetdetail() {
    const { id } = useParams();
    const [bouquet, setBouquet] = useState({});
    const history = useHistory();
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/bouquet/${id}`,
            {
                method: "GET"
            })
            .then((data) => data.json())
            .then((bq) => setBouquet(bq));
    }, [id]);
    console.log(bouquet);
    return (
        <div>
            <p>{bouquet.name}</p>
            <div className="flower-pic">
                <img src={bouquet.image} alt={bouquet.name} />
                <img src={bouquet.image1} alt={bouquet.name} />
                <img src={bouquet.image2} alt={bouquet.name} />
                {/* <img className="movie-pic" src={image} alt={name} /> */}
            </div>
            <div>
                <p>{bouquet.explaination}</p>
            </div>
            <button onClick={() => history.goBack()}>BACK</button>
        </div>
    );
}
