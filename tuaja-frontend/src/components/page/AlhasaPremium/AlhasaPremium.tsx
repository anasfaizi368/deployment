// 'use client'
// import { Box, Image } from '@chakra-ui/react';
// import ImageSliderLogo from "@/components/shared/components/alhasaComponents/ImageSliderLogo"
// import ImageTextSliderComponent from "@/components/shared/components/alhasaComponents/ImageTextSliderComponent"
// import LayoutImagesComponent from "@/components/shared/components/alhasaComponents/LayoutImagesComponent"
// import CenterHeadingText from "@/components/shared/components/CenterHeadingText"
// import Footer from "@/components/shared/components/Footer"
// import SubFooter from "@/components/shared/components/SubFooter"

// const AlhasaPremium = () => {
//     const sliderData = [
//         {

//             image_url: "header.jpg",
//             text1_en: "PREMIUM FARM RESORT",
//             text1_ar: 'منتجع المزرعة المتميز',
//             text2_en: "AL AHSA",
//             text2_ar: 'الأحساء',
//             logo_url: "tuajaluxury.png",
//             logo_alt: "Logo 1",
//         },
//         {

//             image_url: "header.jpg",
//             text1_en: "PREMIUM FARM RESORT",
//             text1_ar: 'منتجع المزرعة المتميز',
//             text2_en: "AL AHSA 2",
//             text2_ar: 'الأحساء',
//             logo_url: "tuajaluxury.png",
//             logo_alt: "Logo 1",
//         },
//     ]
//     const centerHeadingTextData = [
//         {
//             heading_en: `TUAJA PREMIUM FARM RESORT, AL AHSA
// EXPERIENCE NATURE. IMMERSIVELY.`,
//             heading_ar: `همنتجع تواجة بريميوم فارم، الأحساء
// طبيعة التجربة. بشكل غامر.`,
//         },
//     ]
//     const color = 'green'
//     const des_en = `Tuaja Premium Farm Resort welcomes you to an enchanting world of luxury and discovery, nestled within the lush expanse of Al-Ahsa. Each element of the resort, from meticulously designed interiors to artful displays, echoes the essence of the date palm’s beauty. Intricate patterns inspired by Al-Ahsa's rich heritage and earthy tones create a serene atmosphere, inviting relaxation and reflection.​`
//     const des_ar = `في منتجعات تواجا الريفية الفاخرة، نفتح لك الأبواب للحظات استثنائية توقظ حواسك، وتثري معرفتك، وتعزز ارتباطك العميق بطبيعة المملكة.ندعوك للانغماس في جمال المزارع وسحر الطبيعة، حيث كل بذرة تُزرع وكل نكهة تتذوقها تمثل جزءاً من رحلة فريدة لاستكشاف الذات وجمال الطبيعة.`;

//     const Data = [
//         {
//             description_en: des_en,
//             description_ar: des_ar,
//             isButton: false,
//             isHeading: true,
//             image_url: '/cave.jpg',
//             color: color

//         },
//         {
//             description_en: des_en,
//             description_ar: des_ar,
//             isButton: false,
//             isHeading: true,
//             image_url: '/cave.jpg',
//             color: color

//         },
//     ]
//     const exampleImages = [
//         { src: '/_CED4266-1.jpg', alt: 'Resort amenities 1' },
//         { src: '/_CED4436-1.jpg', alt: 'Resort amenities 2' },
//         { src: '/_CED3586-1.jpg', alt: 'Resort amenities 3' },
//         { src: '/_CED2437-1.jpg', alt: 'Resort amenities 4' },
//         { src: '/_CED4448-1.jpg', alt: 'Resort amenities 5' },
//         { src: '/_CED3501-2.jpg', alt: 'Resort amenities 6' },
//         { src: '/_CED3148-1.jpg', alt: 'Resort amenities 7' },
//     ];

//     const exampleHeading_en = "TUAJA LUXURY RESORTS, AL AHSA";
//     const exampleHeading_ar = "منتجعات توجا الفاخرة ، الأحساء";
//     const exampleText_en = `Tuaja at Al Ahsa is a sanctuary where ancient heritage meets modern luxury. Nestled in the world's largest palm oasis, a UNESCO World Heritage Site, the resort awakens your senses with a blend of sands, greenery, and springs.
// combining authentic al Ansa nospitally wii nature-inspired and neritage-rooted experiences, luaja rederines luxury through its architecture, interiors, and immersive offerings.`;
//     const exampleText_ar = `توجا في الأحساء هو ملاذ حيث يلتقي التراث القديم بالفخامة الحديثة. يقع المنتجع في أكبر واحة نخيل في العالم، وهي أحد مواقع التراث العالمي لليونسكو، ويوقظ حواسك بمزيج من الرمال والمساحات الخضراء والينابيع.
// يجمع منتجع الأنسا الأصيل بين التجارب المستوحاة من الطبيعة والجذور التراثية، ويعيد لواجا صياغة الفخامة من خلال هندسته المعمارية وتصميماته الداخلية وعروضه الغامرة.`
//     return (
//         <>
//             <ImageSliderLogo data={sliderData} />
//             <CenterHeadingText data={centerHeadingTextData} color='green.500' paddingX={60} paddingTop={20} />
//             <ImageTextSliderComponent data={Data} paddingX={40} color="green" flexDirection={{ base: 'column', lg: 'row' }} />;
//             <LayoutImagesComponent
//                 images={exampleImages}
//                 heading_en={exampleHeading_en}
//                 heading_ar={exampleHeading_ar}
//                 text_en={exampleText_en}
//                 text_ar={exampleText_ar}
//                 color="#7dba64"
//                 bg_Image="url('/background-img.png')"
//             />
//             <CenterHeadingText data={centerHeadingTextData} color='green.500' />
//             <Image src="pattern01.svg" alt="ee" />
//             <SubFooter />
//             <Footer />
//         </>
//     )
// }

// export default AlhasaPremium