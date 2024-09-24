'use client'
import CenterHeadingText from "@/components/shared/components/CenterHeadingText";
import Footer from "@/components/shared/components/Footer";
import ImageHeaderComponent from "@/components/shared/components/ImageHeaderComponent"
import ImageTextComponent from '@/components/shared/components/ImageTextComponent';
import JournalCardComponent from "@/components/shared/components/JournalCardComponent";
import SubFooter from "@/components/shared/components/SubFooter";
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import ImageTextComponent1 from "../PremiumResort/component/ImageTextComponent1";
import { useLanguage } from "@/components/context/LanguageContext";

const EcoResort = () => {
    const ImageHeaderComponentData = [
        {
            bgImage: {
                src: '/_CED4027-1.jpg',
                alt: 'red white',
            },
            logo: {
                src: '/ecologo1.svg',
                alt: 'blue',
            },
            heading_en: 'TUAJA ECO RESORT',
            heading_ar: 'منتجع تواجا إيكو',
        },
    ];
    const des_en = `With agricultural lands that reach the horizon, where you will feel your body unwinding at our zen spas and traditional hammams; hear fresh water swooshing beside you on your strolls through our falaj-connected trails; and connect with your mind at our special yoga and meditation sessions, Tuaja Eco Resort invites you to unwind and reconnect with your inner-self and re-explore all nature has to offer. ​`
    const des_ar = ` يقدم منتجع تواجا الصديق للبيئة ملاذًا فريدًا بعيدا عن صخب الحياة يجمع بين الاسترخاء والتأمل حيث تهمس في آذانك أصوات المياه العذبة وحفيف الأشجار أثناء مرورك بمسارات المنتجع.بالإضافة إلى تجارب الممارسات التأملية التي صممت لتعزيز الوعي الذاتي والراحة النفسية.ندعوك لاستكشاف الهدوء والجمال الذي تقدمه طبيعتنا في بيئة تنبض بالحياة.
 كما يعد هذا المنتجع تأكيد على أهمية الاستدامة والحفاظ على البيئة سعياً في غرس ثقافة قوية للحفاظ على موارد المملكة وتنوع طبيعتها عبر الأجيال القادمة.`
    const Data = [
        {
            title_en: 'TUAJA ECO RESORT EXPERIENCE NATURE.MINDFULLY.',
            title_a: `منتجع تواجا إيكو
طبيعة التجربة. بوعي.`,
            description_en: des_en,
            description_ar: des_ar,
            isButton: false,
            isHeading: true,
            image_url: '/ecoimage.svg',

        },
    ];
    const centerHeadingTextData = [
        {
            heading_en: `ARE YOU SEEKING TRANQUILITY NESTLED
WITHIN VIBRANT LANDSCAPES?`,
            heading_ar: `هل تبحث عن الهدوء؟
ضمن المناظر الطبيعية النابضة بالحياة؟`,
            description_en: `Discover your sanctuary for mindfulness and rejuvenation.
Tuaja Eco Resort invites you to a haven of relaxation, meditation, and self-discovery. Surrounded by the natural splendor of
our eco-consclous seung, Immerse vourser in a retreat unal retresnes une soirivano enricnes une soul. Here, every momen is an opportunity to unwind and connect deeply with the natural world in our lush, nature-inspired resort.​`,
            description_ar: `اكتشف ملاذك لليقظة الذهنية والتجديد.
يدعوك منتجع Tuaja Eco إلى ملاذ للاسترخاء والتأمل واكتشاف الذات. محاطة بالروعة الطبيعية
سيونغ الصديق للبيئة، انغمس في ملاذٍ يبعث على الاسترخاء، وهو ما يغذي روحًا. هنا، تمثل كل لحظة فرصة للاسترخاء والتواصل بعمق مع العالم الطبيعي في منتجعنا المستوحى من الطبيعة.`
        },
    ]
    const staticJournalData = {
        heading_en: 'EXPERIENCE NATURE. MINDFULLY',
        heading_ar: 'طبيعة التجربة. بوعي',
        data: [
            {

                image_url: '/_CED3326-1.jpg',
                isButton: false
            },
            {

                image_url: '/_CED3586-1.jpg',
                isButton: false
            },
            {

                image_url: '/_CED3735-1.jpg',
                isButton: false
            },
        ],
    };
    const ToursData = [
        {
            title_en: 'Eco Tours ',
            title_ar: 'جولات بيئية',
            description_en: `Our Eco Tours offer a unique chance to explore the resort's stunning natural surroundings. Guided by experts, these tours showcase the diverse ecosystems and the unique flora and fauna of our location. Whether you're learning about sustainable practices or simply enjoying a peaceful nature walk, these tours provide an unforgettable experience.`,
            description_ar: `توفر جولاتنا البيئية فرصة فريدة لاستكشاف المناطق الطبيعية الخلابة المحيطة بالمنتجع. تعرض هذه الجولات، بتوجيه من الخبراء، النظم البيئية المتنوعة والنباتات والحيوانات الفريدة لموقعنا. سواء كنت تتعلم عن الممارسات المستدامة أو تستمتع ببساطة بالمشي وسط الطبيعة الهادئة، فإن هذه الجولات توفر لك تجربة لا تُنسى.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED2437-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const spaData = [
        {
            title_en: 'Spa ad Hammams',
            title_ar: 'سبا والحمامات',
            description_en: `Our spa is a tranquil haven featuring outdoor hydrotherapy pools, a traditional hammam, and a salon offering various beauty services. We provide rejuvenating massage therapies designed to relax both body and mind. Additionally, our retail space offers organic products so you can bring a part of your wellness journey.`,
            description_ar: `يُعد منتجعنا الصحي ملاذًا هادئًا يضم مسابح خارجية للعلاج المائي وحمامًا تقليديًا وصالونًا يقدم خدمات التجميل المتنوعة. نحن نقدم علاجات التدليك المجددة للحيوية والمصممة لاسترخاء الجسم والعقل. بالإضافة إلى ذلك، توفر مساحة البيع بالتجزئة لدينا منتجات عضوية حتى تتمكن من الاستمتاع بجزء من رحلتك الصحية.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED2383-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const yogaData = [
        {
            title_en: 'Yoga and Meditation',
            title_ar: `اليوغا والتأمل`,
            description_en: `we invite our guests to experience the profound benefits of yoga and meditation in a serene natural setting. designed to harmonize body and mind, offering a peaceful escape from the stresses of daily life. our guided meditation sessions help visitors cultivate inner calm and mindfulness, all while surrounded by the tranquil beauty of nature. `,
            description_ar: `نحن ندعو ضيوفنا لتجربة الفوائد العميقة لليوجا والتأمل في بيئة طبيعية هادئة. مصمم لتحقيق الانسجام بين الجسم والعقل، مما يوفر ملاذًا هادئًا من ضغوط الحياة اليومية. تساعد جلسات التأمل المصحوبة بمرشدين الزوار على تنمية الهدوء الداخلي واليقظة الذهنية، كل ذلك بينما يحيط بهم جمال الطبيعة الهادئ.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED4027-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const sensoryData = [
        {
            title_en: 'Sensory Gardens',
            title_ar: `الحدائق الحسية`,
            description_en: `our Sensory Garden is a thoughtfully designed space that stimulates and engages all five senses. Visitors can explore the garden's rich tapestry of scents, colors, textures, sounds, and even tastes, creating a deeply immersive and holistic connection with nature. This unique experience invites guests to slow down, be present, and fully engage with the natural world in a way that refreshes the mind, body, and spirit.`,
            description_ar: `حديقتنا الحسية عبارة عن مساحة مصممة بعناية تحفز وتشرك جميع الحواس الخمس. يمكن للزوار استكشاف نسيج الحديقة الغني من الروائح والألوان والأنسجة والأصوات وحتى الأذواق، مما يخلق اتصالاً غامرًا وشاملاً مع الطبيعة. تدعو هذه التجربة الفريدة الضيوف إلى التباطؤ والتواجد والمشاركة الكاملة مع العالم الطبيعي بطريقة تنعش العقل والجسد والروح.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED1857.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const kidData = [
        {
            title_en: 'Kids Club',
            title_ar: 'نادي الاطفال',
            description_en: `At Tuaja Eco Resort, our Kids Club offers a fun and engaging environment where children can explore, play, and learn about nature, all while making new friends and creating lasting memories`,
            description_ar: `في منتجع Tuaja Eco، يوفر نادي الأطفال لدينا بيئة ممتعة وجذابة حيث يمكن للأطفال استكشاف الطبيعة واللعب بها والتعرف عليها، كل ذلك أثناء تكوين صداقات جديدة وخلق ذكريات دائمة.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED3348-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const ImageHeaderComponentData2 = [
        {
            bgImage: {
                src: '/pool.jpg',
                alt: 'red white',
            },
            logo: {
                src: '/ecologo1.svg',
                alt: 'blue',
            },
            heading_en: 'FIND SERENITY AT TUAJA ECO RESORT, AL AHSA.',
            heading_ar: `ابحث عن الهدوء والسكينة في منتجع توجة إيكو، الأحساء.`,
            text_en: `Nestled in the heart of the world's largest oasis, Tuaja Eco Resort is a sanctuary of peace, drawing the serene beauty of Al Ahsa's millions of date palms into a haven designed for relaxation and mindfulness.​`,
            text_ar: `يقع منتجع Tuaja Eco Resort في قلب أكبر واحة في العالم، وهو ملاذ للسلام، حيث يجذب الجمال الهادئ لملايين أشجار النخيل في الأحساء إلى ملاذ مصمم للاسترخاء واليقظة.​`,
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
            <ImageTextComponent data={Data} paddingX={40} color="#51c0ad" flexDirection={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }} />;
            <CenterHeadingText width={{ base: '100%', md: '60%' }} data={centerHeadingTextData} color="#51c0ad" />
            <Box marginY={20}>
                <JournalCardComponent bg={"url(/Image-01.png)"} heading_en={staticJournalData.heading_en} heading_ar={staticJournalData.heading_ar} color="white" data={staticJournalData.data} color_btn={""} />
            </Box>
            <ImageTextComponent1 data={ToursData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="#51c0ad" />
            <ImageTextComponent1 data={spaData} color="#51c0ad" flexDir={{ base: 'column', md: isRTL ? 'row-reverse' : 'row' }} />
            <ImageTextComponent1 data={yogaData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="#51c0ad" />
            <ImageTextComponent1 data={sensoryData} color="#51c0ad" flexDir={{ base: 'column', md: isRTL ? 'row-reverse' : 'row' }} />
            <ImageTextComponent1 data={kidData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="#51c0ad" />
            <Box position="relative" width="100%" height="190px" marginTop={20}>
                <Image
                    src="/patternEco-01.svg"
                    alt="ss"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <ImageHeaderComponent colors="#51c0ad" data={ImageHeaderComponentData2} />
            <SubFooter />
            <Footer />
        </>
    )
}

export default EcoResort;