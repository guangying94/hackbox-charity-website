import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CharityCard';
import HeroBar from './Introduction';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const api = {
    base: "https://hackboxcharity.azurewebsites.net/api/GetCharityList?code=p2Vk6bS5wi191Hj3v9GsVmAe2O8F6fpOiHBiwRo7maYPII5UoIfuaA=="
}

function Cards() {
    const [charityList, setList] = useState([]);

    useEffect(() => {
        axios.get(api.base)
            .then(response => {
                setList(response.data)
            })
    });

    if (charityList) {
        return (
            <>
            <HeroBar />
                  <div class="bg-white bg-opacity-20 rounded-xl py-4">
        <div class="text-3xl text-center font-bold pb-4">
          🏡 Charity Organizations List
        </div>
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": true
                }} pagination={{
                    "dynamicBullets": true
                }} navigation={true} className="mySwiper">
                    {charityList.map((item, key) => {
                        console.log(item)
                        return (
                            <SwiperSlide>
                                <Card name={item.name} uen={item.uen} website={item.website} tax={item.tax} qrcode={item.qrcode} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                </div>
            </>
        )
    }
};

export default Cards;