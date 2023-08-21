import '../componentscss/Jobs.css'
import { useState, useEffect } from 'react';

function Jobs() {
    const [number, setNumber] = useState(0);
    const [showLink, setShowLink] = useState(false);

    useEffect(() => {
        if (number < 15) {
            const intervalId = setInterval(() => {
                setNumber(prevNumber => prevNumber + 1);
            }, 1000); // Update the counter every second (1000 milliseconds)

            return () => {
                clearInterval(intervalId); // Clean up the interval when the component unmounts
            };
        } else {
            setShowLink(true); // Show the link after 20 seconds
        }
    }, [number]); // Run the effect whenever the number changes

    return (
        <>
            <div className='head'>
                <h1>Jade Global Off Campus Freshers Recruitment</h1>

                <h3>Job Role : Associate Analyst</h3>

                <h3>Experience : Freshers</h3>

                <h3>Qualification : BE/BTech</h3>

                <h3>Year of Passing: 2020/2021/2022/2023</h3>

                <h3>Salary: ₹3,75,000/- per annum</h3>


                <h3>Jade Global Off Campus Drive 2023 for Associate Analyst </h3>


                <h3>✅Join Whatsapp Group :
                    <a href='https://chat.whatsapp.com/BhTQl7F9Nky1B5XxxqPqsm'>https://chat.whatsapp.com</a></h3>


                <h3>✅Join Telegram Group:<a href='https://t.me/devotiontocode'>https://t.me/devotiontocode</a></h3>

            </div>
            <h1>Scroll down..</h1>
            <h1>Link will generate in 15 seconds..</h1>
            <div className='text'>
                <h1>Please wait for {number} seconds..</h1>
            </div>
            <div className='bu'>
                {showLink ? <button className='buttonJobs'><a href="https://match.myanatomy.in/corporate/customCampaign/view?publicLink=bf10b330212135e27fab916dab322b7a;b07628c1023996aedb645feecd890f3301dd4d75bd62d5cd3321ce06df47c0383e6e4cf0a474955b95ed418e8427a012eb9bbe51cfee8c777cc03a4f62ac72732ac2f7e22b7f88f6969a38cddb5c6beefb94409aed7f2a8c86dcc2efe2a7fb378afda05ae207f281c917ab94b0feccbae3e59357f25719f1b13a7facbfd79f44c3e8536239cfa316559c1b79895e0f60ffe0c5b2d71705205168a9283ea553fb20c65acdb8f8954e67ad5ecbf129a6e17a541ce29e87c745821b2046bce487789f0e0488cff5208849e1f3a3932617b1&source=jobsorigin.com">Generated</a></button> : <button className='buttonJobs'>Generating link..</button>}
            </div>
        </>
    );
}

export default Jobs;
