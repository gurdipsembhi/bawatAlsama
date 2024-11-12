import React from 'react';
import styles from './footerstyle.module.css'; // Import CSS file for styling
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const data = {
        "socialMediaIcons": [
            {
                "platform": "Facebook",
                "icon": "/image/facebook.png",
                "link": "https://www.facebook.com"
            },
            {
                "platform": "Twitter",
                "icon": "/socialMediaIcons/twitter.png",
                "link": "https://www.twitter.com"
            },
            {
                "platform": "Pinterest",
                "icon": "/socialMediaIcons/social.png",
                "link": "https://www.pinterest.com"
            },
            {
                "platform": "LinkedIn",
                "icon": "/socialMediaIcons/linkedin.png",
                "link": "https://www.yourgroup.com"
            }
        ],
        "helpAndInfo": [
            {
                "title": "Returns and Complaints",
                "link": "/returns-and-complaints"
            },
            {
                "title": "Delivery & Payment",
                "link": "/delivery-and-payment"
            },
            {
                "title": "FAQ",
                "link": "/faq"
            },
            {
                "title": "Contact",
                "link": "/contact"
            }
        ],
        "cooperation": [
            {
                "title": "Brand Files",
                "link": "/brand-files"
            },
            {
                "title": "Media",
                "link": "/media"
            },
            {
                "title": "About Logo",
                "link": "/about-logo"
            },
            {
                "title": "Download",
                "link": "/download"
            }
        ],
        "legal": [
            {
                "title": "Terms & Conditions",
                "link": "/terms-and-conditions"
            },
            {
                "title": "Privacy Policy",
                "link": "/privacy-policy"
            }
        ],
        "footerNote": "Made with looove",
        "companyName": "Destm"
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.widthprovider}>
                    <div>
                        {data.socialMediaIcons.map((item, index) =>
                        <>
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconContainer}>
                                <Image src={item.icon} width={50} height={50} alt={item.platform} />
                                <p>{item.platform}</p>
                            </div>
                        </a>
                            </>

                        )}
                    </div>
                    <div className={styles.innercontainerSecond}>
                        <div>   
                            {data.helpAndInfo.map((item, index) =>
                                <Link key={index} href={item.link} passHref>
                                <p className={styles.link}>{item.title}</p>
                            </Link>
                            )}
                        </div>
                        <div>
                            {data.cooperation.map((item, index) =>
                                 <Link key={index} href={item.link} passHref>
                                 <p className={styles.link}>{item.title}</p>
                             </Link>
                            )}

                        </div>
                        <div>
                            {data.legal.map((item, index) =>
                                 <Link key={index} href={item.link} passHref>
                                 <p className={styles.link}>{item.title}</p>
                             </Link>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
