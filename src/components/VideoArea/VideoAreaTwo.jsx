import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { intersectingAnimation } from "../../lib/helpers";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const VideoAreaTwo = () => {
  useEffect(() => {
    intersectingAnimation();
  }, []);

  return (
    <section className="video-area inner-video-area has-animation pb-130">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 order-0 order-lg-2">
            <div className="video-img-wrap">
              <img src="/img/images/video_img01.png" alt="" />
              <img src="/img/images/video_img02.png" alt="" />
            
            </div>
          </div>

          <div className="col-lg-7">
            <div className="video-content">
              <div className="section-title mb-50">
                <span className="sub-title">
                  <svg
                    viewBox="0 0 41 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                      fill="currentcolor"
                    />
                  </svg>
                  Best Experts in  Janitorial services
                </span>
                <h2 className="title">
                We are specialized in
                </h2>
              </div>


              <ul className="list-wrap">
                <li>
                  <div className="list-item">
                  <div className="services-icon"> 
                    <svg viewBox="0 0 22 22" width="50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.85102 18.5502L3.61443 16.3148L1.69825 18.231C1.08292 18.8464 1.08292 19.8523 1.69825 20.4676C2.3124 21.0818 3.31833 21.0818 3.93366 20.4676L5.85102 18.5502Z"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.54113 18.2402L10.0097 13.7717M8.393 12.1551L3.9245 16.6236"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7789 9.96709L18.3394 13.5276L17.4187 14.4483C16.755 15.112 15.6696 15.112 15.0059 14.4483L7.71662 7.16013C7.05288 6.49643 7.05288 5.40985 7.71662 4.74611L8.63727 3.8255L12.1978 7.38599"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.03479 4.22305L10.2308 3.02699L19.1391 11.934L17.9418 13.1301"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.3987 13.8408L11.3613 10.8034L8.32391 7.76606C8.75021 9.74334 8.87928 10.7147 8.39302 12.155L9.20078 12.9639L10.0096 13.7717C11.45 13.2854 12.4214 13.4145 14.3987 13.8408Z"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5665 2.59838L16.1178 6.04712"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1404 5.46392L17.837 7.76733"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7021 2.02564L14.3987 4.32788"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.04275L19.5562 9.48657"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1232 1.16482L12.6794 2.60864"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.56033 1.00015L4.44411 2.6767L6.12066 3.56052L4.44411 4.4443L3.56033 6.12085L2.67655 4.4443L1 3.56052L2.67655 2.6767L3.56033 1.00015Z"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.8543 16.3298L18.6597 17.8589L20.1888 18.6643L18.6597 19.4698L17.8543 21L17.0477 19.4698L15.5186 18.6643L17.0477 17.8589L17.8543 16.3298Z"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.77368 7.78574L5.47311 9.11431L6.80169 9.81375L5.47311 10.5132L4.77368 11.8406L4.07424 10.5132L2.74567 9.81375L4.07424 9.11431L4.77368 7.78574Z"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4872 8.67479L13.4889 8.67651"
            stroke="currentcolor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </div>
                    <Link to="">
                    Steamwash carpet  Janitorial services.
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                  <div className="services-icon"> 
                  <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" fill="#9D958E"><path d="M24.851 116.829h78.3a1.794 1.794 0 0 0 1.794-1.794v-28.9a1.794 1.794 0 0 0-1.794-1.794H89.564V12.965a1.794 1.794 0 0 0-1.794-1.794H40.23a1.794 1.794 0 0 0-1.794 1.794v71.379H24.851a1.794 1.794 0 0 0-1.794 1.794v28.9a1.794 1.794 0 0 0 1.794 1.791zm45.276-88.406v11.734H57.87V28.423zM57.87 24.835V14.759h12.257v10.076zm0 18.91h12.257V55.48H57.87zM54.281 55.48H42.024V43.745h12.257zm19.434-11.735h12.261V55.48H73.715zm12.261 15.323V70.8H73.715V59.068zm0-18.911H73.715V28.423h12.261zm-31.694 0H42.024V28.423h12.257zM42.024 59.068h12.257V70.8H42.024zm15.845 0h12.258V70.8H57.87zM70.127 74.39v9.954H57.87V74.39zm-14.06 13.542h29.909v25.309h-6.318V96.16a1.793 1.793 0 0 0-1.794-1.794H50.133a1.794 1.794 0 0 0-1.794 1.794v17.082h-6.315v-25.31zm9.725 10.022H76.07v15.287H65.792zM62.2 113.241H51.927V97.954H62.2zm39.151-25.309v25.309H89.564V87.932zm-27.64-3.588V74.39h12.265v9.954zm12.265-59.509H73.715V14.759h12.261zM54.281 14.759v10.076H42.024V14.759zM42.024 74.39h12.257v9.954H42.024zM26.645 87.932h11.791v25.309H26.645z"/></svg>
                  </div>
                    <Link to="">
                    Underground parking powerwash.
                   
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="list-item">
                  <div className="services-icon"> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" fill="#9D958E"><defs></defs><g id="wax" fill="#9D958E"><path class="cls-1" d="M24 17.27V15.9a1.9 1.9 0 0 0-1.9-1.9H12a1 1 0 0 0 0 2h10v1H6v-1h2a1 1 0 0 0 0-2H5.9A1.9 1.9 0 0 0 4 15.9v1.37A2 2 0 0 0 3 19v9a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2a1 1 0 0 0-2 0v2H5v-9h18v3a1 1 0 0 0 2 0v-3a2 2 0 0 0-1-1.73zM27 3h-9.07a3.54 3.54 0 0 0-2.47-1h-3.92A3.55 3.55 0 0 0 8 5.54v4a2.5 2.5 0 0 0 5 0 .5.5 0 0 1 1 0v1a2.5 2.5 0 0 0 5 0V5h8a1 1 0 0 1 0 2h-5a1 1 0 0 0 0 2h5a3 3 0 0 0 0-6zm-10 7.5a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0 .5.5 0 0 1-1 0v-4A1.54 1.54 0 0 1 11.54 4h3.92A1.54 1.54 0 0 1 17 5.54v5z"/><path class="cls-1" d="M11 21a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm5 3h-4v-1h4z"/></g></svg>

                    </div>
                    <Link to="">
                    Stripping & waxing.
                   
                    </Link>
                  </div>
                </li>
              </ul>

              <Link to="/services" className="btn">
                Discover MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAreaTwo;
