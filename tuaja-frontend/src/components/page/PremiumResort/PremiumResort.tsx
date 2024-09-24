import CenterHeadingText from "@/components/shared/components/CenterHeadingText";
import Footer from "@/components/shared/components/Footer";
import ImageHeaderComponent from "@/components/shared/components/ImageHeaderComponent"
import ImageTextComponent from '@/components/shared/components/ImageTextComponent';
import ImageTextShortComponent from "@/components/shared/components/ImageTextShortComponent";
import JournalCardComponent from "@/components/shared/components/JournalCardComponent";
import SubFooter from "@/components/shared/components/SubFooter";
import { Box } from '@chakra-ui/react';
import ImageTextComponent1 from "./component/ImageTextComponent1";
import { useLanguage } from "@/components/context/LanguageContext";
import Image from 'next/image';

const PremiumResort = () => {
    const ImageHeaderComponentData = [
        {
            bgImage: {
                src: '/_CED3148-1.jpg',
                alt: 'red white',
            },
            logo: {
                src: '/premiumlogo1.svg',
                alt: 'blue',
            },
            heading_en: 'TUAJA PREMIUM FARM RESORT',
            heading_ar: 'منتجع تواجا بريميوم فارم',
        },
    ];
    const des_en = `With agricultural lands that reach the horizon, Tuaja Premium Farm Resort welcomes you to discover unseen travesties and untold tales at the home of agritourism. Our villas will be surrounded by lush gardens and have their own private pools, and the trails will lead you through marvelous flora and fauna, as well as the traditional farmer’s market. For those of you who enjoy fine dining, the tantalizing farm-to-table experience is tailored just for you.`;

    const des_ar = `في منتجعات تواجا الريفية الفاخرة، نفتح لك الأبواب للحظات استثنائية توقظ حواسك، وتثري معرفتك، وتعزز ارتباطك العميق بطبيعة المملكة.ندعوك للانغماس في جمال المزارع وسحر الطبيعة، حيث كل بذرة تُزرع وكل نكهة تتذوقها تمثل جزءاً من رحلة فريدة لاستكشاف الذات وجمال الطبيعة.`;

    const color = 'green'
    const Data = [
        {
            title_en: 'TUAJA PREMIUM FARM RESORT​ Experience Nature.Immersively.',
            title_ar: 'تجارب ريفية فاخرة',
            description_en: des_en,
            description_ar: des_ar,
            isButton: false,
            isHeading: true,
            image_url: '/premiumImage.svg',
            color: color

        },
    ];
    const centerHeadingTextData = [
        {
            heading_en: 'Do you want to immerse yourself in a luxurious farm experience? ',
            heading_ar: 'من المزرعة إلى المائدة',
            description_en: 'This is your magical escape.​ Tuaja Premium Farm Resort is the perfect place to explore with your family, friends, or even solo, to discover the beauty of our Kingdoms lush nature​',
            description_ar: 'استمتع بتجربة فريدة لتناول الطعام في منتجع تواجا الريفي الفاخر، حيث يلتقي فن الطهي بأصالة النكهة الطازجة للمحاصيل. تُحضر أطباقنا من أروع المكونات الطبيعية، التي تم قطفها من قلب المزرعة وعلى بعد خطوات من مكان جلوسك، ',
        },
    ]
    const staticJournalData = {
        heading_en: 'EXPERIENCE NATURE IMMERSEFULLY',
        heading_ar: 'استمتع بالطبيعة بشكل مذهل',
        data: [
            {

                image_url: '/_CED1980.jpg',
                isButton: false
            },
            {

                image_url: '/_CED3501-2.jpg',
                isButton: false
            },
            {

                image_url: '/_CED3436-1.jpg',
                isButton: false
            },
        ],
    };
    const TableData = [
        {
            title_en: 'Farm-to-Table Dining',
            title_ar: 'تناول الطعام من المزرعة إلى المائدة',
            description_en: `Discover the essence of farm-to-table dining at Tuaja Premium Farm Resort, where gastronomy meets the freshness of the farm. Enjoy meals crafted from the freshest ingredients, picked just steps from where you dine.`,
            description_ar: `اكتشف جوهر تناول الطعام من المزرعة إلى المائدة في منتجع Tuaja Premium Farm، حيث يلتقي فن الطهي مع نضارة المزرعة. استمتع بالوجبات المعدة من المكونات الطازجة، التي يتم اختيارها على بعد خطوات فقط من مكان تناول الطعام.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED4564-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const LuxuryData = [
        {
            title_en: 'Luxurious Agritourism Experiences',
            title_ar: 'تجارب السياحة الزراعية الفاخرة',
            description_en: `At Tuaja Luxury Farm Resorts, we open the doors to exceptional moments that awaken your senses, enrich your knowledge, and deepen your connection with the Kingdom's nature. We invite you to immerse yourself in the beauty of the farms and the magic of nature, where every seed planted and every flavor tasted represents a part of a unique journey of self-discovery and appreciation of nature's beauty`,
            description_ar: `بعيدًا في جنة خضراء، تقع تجربة السياحة الزراعية الفاخرة لدينا في حدائق مورقة توفر لك المساحة و
تحتاج إلى الاسترخاء، وتتمتع بتجربة خاصة في قلب الطبيعة والفخامة في تصميمنا الذي يضمن لك إقامة لا تُنسى.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED1857.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const Garden = [
        {
            title_en: 'Gardens',
            title_ar: 'حدائق',
            description_en: `At Tuaja Luxury Farm Resorts, enchanting gardens brimming with life await you. Immerse your senses in the fragrance of flowers, and let yourself create lasting memories among the lush palm oases. Here, where enjoyment and immersion in the Kingdom's nature come together`,
            description_ar: `في منتجعات Tuaja Luxury Farm، تنتظرك حدائق ساحرة مفعمة بالحياة. انغمس حواسك في عطر الزهور، ودع نفسك تخلق ذكريات تدوم بين واحات النخيل الخصبة. هنا، حيث يجتمع الاستمتاع والانغماس في طبيعة المملكة`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED2502-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const Organic = [
        {
            title_en: 'Organic Products',
            title_ar: 'المنتجات العضوية',
            description_en: `We take pride in offering a variety of flavors with organic products as part of our commitment to providing an immersive rural experience. Our guests can enjoy a wide range of products that have been harvested directly from our vast farms and the local community.`,
            description_ar: `في منتجع Tuaja Premium Farm، نفخر بتقديم تجربة طهي عضوية حقيقية كجزء من التزامنا تجاه
تجربة Tarm غامرة. يمكن أن توفر مساعينا مجموعة واسعة من المنتجات العضوية، والتي يتم الحصول عليها مباشرة من مزرعتنا الواسعة.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED3148-2-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const ImageHeaderComponentData2 = [
        {
            bgImage: {
                src: '/farm-resort.jpg',
                alt: 'red white',
            },
            logo: {
                src: '/premiumlogo1.svg',
                alt: 'blue',
            },
            heading_en: 'TUAJA PREMIUM FARM RESORT',
            heading_ar: 'منتجع تواجا بريميوم فارم',
            text_en:
                'With an abundance of farmland, where cultural heritage intertwines with a spellbinding escape, Tuaja Luxury Resorts aims to introduce brand- new one - of - a - kind hospitality experiences in Saudi Arabia crowned with luxury that pampers their',
            text_ar:
                'مع وفرة الأراضي الزراعية، حيث يتشابك التراث الثقافي مع ملاذ ساحر، تهدف منتجعات Tuaja Luxury Resorts إلى تقديم تجارب ضيافة جديدة وفريدة من نوعها في المملكة العربية السعودية متوجة بالفخامة التي تدلل سكانها.',
            isButton: true,
            isHeading: true,
            buttonText: 'VISIT AL AHSA RESORT',
        },
    ];
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    return (
        <>
            <ImageHeaderComponent data={ImageHeaderComponentData} foSize />
            <ImageTextComponent data={Data} paddingX={40} color="green.500" flexDirection={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }} />;
            <CenterHeadingText width={{ base: '100%', md: '60%' }} data={centerHeadingTextData} color="green.500" />
            <Box marginY={10}>
                <JournalCardComponent bg={"url(/Image-03.png)"} heading_en={staticJournalData.heading_en} heading_ar={staticJournalData.heading_ar} color="green.400" data={staticJournalData.data}  color_btn="white"/>
            </Box>
            <ImageTextComponent1 data={TableData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="green.500" />
            <ImageTextComponent1 data={Garden} color="green.500" flexDir={{ base: 'column', md: isRTL ? 'row-reverse' : 'row' }} />
            <ImageTextComponent1 data={Organic} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="green.500" />
            <ImageTextComponent1 data={LuxuryData} color="green.500" flexDir={{ base: 'column', md: isRTL ? 'row-reverse' : 'row' }} />
            <Box position="relative" width="100%" height="190px">
                <Image
                    src="/pattern01.svg"
                    alt="ss"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <ImageHeaderComponent colors="green.500" data={ImageHeaderComponentData2} />
            <SubFooter />
            <Footer />
        </>
    )
}

export default PremiumResort