
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {

    const {_id,title,details,image_url } = aNews

    // console.log(title)

    return (
        <div className='pb-9'>
            <div className="card bg-base-100 shadow-xl p-6 border">
            <h2 className="card-title font-bold pb-4 leading-normal"> {title} </h2>
                <figure ><img className='w-full pb-4' src={image_url} /></figure>
                <div className="">
                    {
                        details.length > 200 ?
                         <p className='opacity-90 text-justify'>{details.slice(0,205)} 
                         <Link 
                         to={`/news/${_id}`}
                         className='font-bold text-red-500'> Read More.... </Link> 
                         </p>
                        :<p className='opacity-90'>{details} </p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNews: PropTypes.object
};

export default NewsCard;