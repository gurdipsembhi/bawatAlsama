'use client'
import React, { useState } from 'react';
import styles from './collectionSection.module.css';
import Image from 'next/image';
import imageData from '@/json/ourProjects.json';

function CollectionSection() {
    const [selected, setSelected] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');


    const handleFilterChange = (category: any) => {
        setSelectedCategory(category);
    };

    const filteredImages = selectedCategory === 'All'
        ? imageData
        : imageData.filter(image => image.category === selectedCategory);




    const handleClick = (item: any) => {
        setSelected(item);
    };
    console.log(filteredImages, 'filteredImages')

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.firstContainer}>
                    {['All', 'Residential', 'Offices', 'Villa', 'Appartment'].map((item) => (
                        <div
                            key={item}
                            className={`${styles.innerData} ${selected === item ? styles.selected : ''}`}
                            onClick={() => {
                                handleClick(item)
                                handleFilterChange(item)
                            }

                            }
                        >
                            {item}
                        </div>

                    ))}
                </div>
                <div className={styles.filteredImages}>
                    {filteredImages.map((image, index) => (
                        <div key={index} className={styles.mainImageContainer}>
                            <Image src={image.url} alt={image.category} width={0} height={0} sizes='100vw'
                                className={styles.imageCss}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <h2 className={styles.title}>{image?.title}</h2>
                            <div className={styles.description}>{image?.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CollectionSection;
