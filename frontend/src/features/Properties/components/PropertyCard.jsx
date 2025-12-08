import React, { useState } from 'react';

import {
    Heart,
    MapPin,
    Bed,
    Bath,
    Square,
    Star,
    Search,
    Filter,
    Phone,
    X,
    Home,
    Building2,
    DollarSign,
    Ruler
} from 'lucide-react';

import '../styles/PropertyCard.css';
// PropertyCard Component
const PropertyCard = ({ property }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className='re-property-card'>
            <div className='re-property-card__image-container'>
                <img
                    src={property.image}
                    alt={property.title}
                    className='re-property-card__image'
                />
                <div
                    className={`re-property-card__badge ${
                        property.badge === 'Nổi bật'
                            ? 're-property-card__badge--featured'
                            : property.badge === 'Hot'
                            ? 're-property-card__badge--hot'
                            : 're-property-card__badge--new'
                    }`}
                >
                    {property.badge}
                </div>
                <button
                    className={`re-property-card__favorite-btn ${
                        isFavorite
                            ? 're-property-card__favorite-btn--active'
                            : ''
                    }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <Heart size={20} fill={isFavorite ? '#f5576c' : 'none'} />
                </button>
                <div className='re-property-card__price-tag'>
                    {property.price}
                </div>
            </div>

            <div className='re-property-card__content'>
                <div className='re-property-card__header'>
                    <h3 className='re-property-card__title'>
                        {property.title}
                    </h3>
                    <div className='re-property-card__rating'>
                        <Star size={14} fill='#f59e0b' stroke='#f59e0b' />
                        <span>{property.rating}</span>
                    </div>
                </div>

                <div className='re-property-card__location'>
                    <MapPin size={16} />
                    <span>{property.location}</span>
                </div>

                <div className='re-property-card__features'>
                    <div className='re-property-card__feature-item'>
                        <div className='re-property-card__feature-icon'>
                            <Bed size={18} />
                        </div>
                        <span className='re-property-card__feature-text'>
                            {property.bedrooms} PN
                        </span>
                    </div>
                    <div className='re-property-card__feature-item'>
                        <div className='re-property-card__feature-icon'>
                            <Bath size={18} />
                        </div>
                        <span className='re-property-card__feature-text'>
                            {property.bathrooms} PT
                        </span>
                    </div>
                    <div className='re-property-card__feature-item'>
                        <div className='re-property-card__feature-icon'>
                            <Square size={18} />
                        </div>
                        <span className='re-property-card__feature-text'>
                            {property.area} m²
                        </span>
                    </div>
                </div>

                <div className='re-property-card__footer'>
                    <button className='re-property-card__btn re-property-card__btn--primary'>
                        Xem chi tiết
                    </button>
                    <button className='re-property-card__btn re-property-card__btn--icon'>
                        <Phone size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
