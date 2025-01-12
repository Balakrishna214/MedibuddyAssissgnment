import React, { useEffect, useState } from 'react';
import CustomLoader from './components/CustomLoader';
import IconsSection from './components/IconsSection';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BannersSection from './components/BannersSection';
import FAQ from './components/FAQ';
import ReviewSection from './components/ReviewSection';
import HealthCheckupPackages from './components/HealthCheckupPackages';
import HowItWorks from './components/HowItWorks';
import SafetyAndSecurity from './components/SafetyAndSecurity';
import TrustedBy from './components/TrustedBy';
import HealthPackages from './components/HealthPackages';



const API_URL = 'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config';

const App = () => {
    const [fetchedData, setFetchedData] = useState(null);
    const [icons, setIcons] = useState([]);
    const [banners, setBanners] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setFetchedData(data);
                setIcons(data[0].page_config[0]?.props || []);
                setBanners(data[0].page_config[1]?.props || []);
                setFaqData(data[0].page_config[6]?.props || []);
                setReviews(data[0].page_config[5]?.props || []);
                setPackages(data[0].page_config[2]?.props[0]|| []);
                 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!fetchedData) return <CustomLoader icons={icons} />;
    console.log(fetchedData);
    
    return (
        <div className="App">
            <Header />
            
            <SearchBar />
            <IconsSection icons={icons} />

            <BannersSection banners={banners} />
            <HealthPackages packages={packages} />
             <TrustedBy/>
            <ReviewSection reviews={reviews} />
            <HealthCheckupPackages/>
            <SafetyAndSecurity/>
            <HowItWorks/>
            <FAQ faqData={faqData} />
            {/* Render other sections here using the fetched data */}

        </div>
    );
};

export default App;
