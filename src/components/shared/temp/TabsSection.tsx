// import React, { useState } from 'react';
// import './css/tabssection.css';

// export default function TabsSection() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const tabContents = [
//     {
//       tabTitle:
//         'Adventurous Interior Design Inspired by the Adventurous Qarah Mountain',

//       tabdesc:
//         'The resort is designed to mirror the awe-inspiring contours and textures of Al Qarah Mountain. Rugged textures and earthy tones throughout the reception, rooms, and communal areas evoke the mountain’s enduring presence, urging you to embrace the wild and push your limits. Tuaja Adventure Resort is a sanctuary for those who crave invigorating experiences that exhilarate the body and enliven the soul.',
//       tabImage: '/tabsection_1.png',
//     },
//     {
//       tabTitle: 'Unforgettable adventures for family and friends',

//       tabdesc:
//         'The resort is designed to mirror the awe-inspiring contours and textures of Al Qarah Mountain. Rugged textures and earthy tones throughout the reception, rooms, and communal areas evoke the mountain’s enduring presence, urging you to embrace the wild and push your limits. Tuaja Adventure Resort is a sanctuary for those who crave invigorating experiences that exhilarate the body and enliven the soul.',
//       tabImage: '/tabsection_1.png',
//     },
//     {
//       tabTitle: 'A Sound Stay in the Heart of the Adventure ',

//       tabdesc:
//         'The resort is designed to mirror the awe-inspiring contours and textures of Al Qarah Mountain. Rugged textures and earthy tones throughout the reception, rooms, and communal areas evoke the mountain’s enduring presence, urging you to embrace the wild and push your limits. Tuaja Adventure Resort is a sanctuary for those who crave invigorating experiences that exhilarate the body and enliven the soul.',
//       tabImage: '/tabsection_1.png',
//     },
//   ];

//   React.useEffect(() => {
//     setIsAnimating(true);
//     const timer = setTimeout(() => setIsAnimating(false), 400);
//     return () => clearTimeout(timer);
//   }, [activeTab]);

//   return (
//     <div className="tabs_section__wrapper">
//       <div className="container">
//         <div className="topheading">
//           <h2 className="topheading__text">
//             &quot;Discover Tuaja Adventure, where the rugged beauty of Al Ahsa ignites
//             <br />
//             your spirit for adrenaline, thrill, and exploration.&quot;
//           </h2>
//         </div>

//         <div className="vertical__tabs">
//           {[0, 1, 2].map((index) => (
//             <React.Fragment key={index}>
//               <div
//                 className={`tabs__${['one', 'two', 'three'][index]} ${
//                   activeTab === index ? 'tab__active' : ''
//                 }`}
//                 onClick={() => setActiveTab(index)}
//               >
//                 <p className="tabTitle">{tabContents[index]['tabTitle']}</p>
//               </div>
//               {activeTab === index && (
//                 <div className={`tabcontent ${!isAnimating ? 'active' : ''}`}>
//                   <div className="tabcontent__text">
//                     <h2 className="tabheading">
//                       {tabContents[index]['tabTitle']}
//                     </h2>
//                     <p className="tab__desc">{tabContents[index]['tabdesc']}</p>
//                   </div>
//                   <img src={tabContents[index]['tabImage']} alt="" />
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
