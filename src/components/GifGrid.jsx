import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { isLoading && <div className="loader" data-testid="loader"></div> }

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))    
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}