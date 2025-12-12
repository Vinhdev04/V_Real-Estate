import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, Star, Heart, Eye } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ property, onFavorite, isFavorite }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getBadgeClass = (badge) => {
        const badges = {
            Hot: 'property-card__badge--hot',
            'Nổi bật': 'property-card__badge--featured',
            Mới: 'property-card__badge--new',
            'Giảm giá': 'property-card__badge--sale'
        };
        return badges[badge] || '';
    };

    return (
        <div
            className='property-card'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='property-card__image-wrapper'>
                <img
                    src={property.image}
                    alt={property.title}
                    className='property-card__image'
                />
                {property.badge && (
                    <span
                        className={`property-card__badge ${getBadgeClass(
                            property.badge
                        )}`}
                    >
                        {property.badge}
                    </span>
                )}
                <button
                    className={`property-card__favorite ${
                        isFavorite ? 'property-card__favorite--active' : ''
                    }`}
                    onClick={() => onFavorite(property.id)}
                >
                    <Heart className='property-card__favorite-icon' />
                </button>
                <div
                    className={`property-card__overlay ${
                        isHovered ? 'property-card__overlay--visible' : ''
                    }`}
                >
                    <button className='property-card__action-btn'>
                        <Eye size={18} />
                        <span>Xem chi tiết</span>
                    </button>
                </div>
            </div>

            <div className='property-card__content'>
                <div className='property-card__header'>
                    <h3 className='property-card__title'>{property.title}</h3>
                    <div className='property-card__rating'>
                        <Star className='property-card__rating-icon' />
                        <span>{property.rating}</span>
                    </div>
                </div>

                <div className='property-card__location'>
                    <MapPin className='property-card__location-icon' />
                    <span>{property.location}</span>
                </div>

                <div className='property-card__features'>
                    <div className='property-card__feature'>
                        <Bed className='property-card__feature-icon' />
                        <span>{property.bedrooms} PN</span>
                    </div>
                    <div className='property-card__feature'>
                        <Bath className='property-card__feature-icon' />
                        <span>{property.bathrooms} WC</span>
                    </div>
                    <div className='property-card__feature'>
                        <Maximize className='property-card__feature-icon' />
                        <span>{property.area} m²</span>
                    </div>
                </div>

                <div className='property-card__footer'>
                    <span className='property-card__price'>
                        {property.price}
                    </span>
                    <button className='property-card__contact-btn'>
                        Liên hệ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
