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

const AdventureResort = () => {
    const ImageHeaderComponentData = [
        {
            bgImage: {
                src: '/_CED4339-2.jpg',
                alt: 'red white',
            },
            logo: {
                src: '/adbantureLogo1.svg',
                alt: 'blue',
            },
            heading_en: 'TUAJA ADVENTURE RESORT',
            heading_ar: 'منتجع تواجا بريميوم فارم',
        },
    ];
    const des_en = `With agricultural lands that reach the horizon, where you feel the rocks beneath you as you climb your way to the top, have your hair flowing with air as you zipline to the other side of the wilderness, and watch stars sparkling in the dark wonderous sky, Tuaja Adventure Resort will be packed with delightful experiences. For every knack for adventure, you will find an activity that picks your taste.`;

    const des_ar = `مع الأراضي الزراعية التي تصل إلى الأفق، حيث تشعر بالصخور تحتك وأنت تتسلق طريقك إلى الأعلى، ويتدفق شعرك مع الهواء وأنت تنزلق إلى الجانب الآخر من البرية، وتشاهد النجوم تتلألأ في السماء المظلمة الرائعة ، سيكون منتجع Tuaja Adventure مليئًا بالتجارب المبهجة. مقابل كل موهبة للمغامرة، ستجد نشاطًا يناسب ذوقك.`
    const Data = [
        {
            title_en: 'TUAJA ADVENTURE RESORT​ Experience Nature.Adventurously.',
            title_a: `منتجع تواجا للمغامرات
تجربة الطبيعة. بمغامرة.`,
            description_en: des_en,
            description_ar: des_ar,
            isButton: false,
            isHeading: true,
            image_url: '/advanture.png',

        },
    ];
    const centerHeadingTextData = [
        {
            heading_en: `ARE YOU READY TO UNLOCK AN ADVENTURE IN THE HEART OF NATURE'S MYSTERIES? `,
            heading_ar: `هل أنت مستعد لفتح مغامرة في قلب أسرار الطبيعة؟`,
            description_en: `Elevate your adventure to a new heights.
Tuaja Adventure Resort invites you to a world of exhilarating adventures and fun- packed activities for you, your friends, and your family.Connect with yourself and your loved ones through experiences designed to strengthen bonds and create lasting
    memories, day ana nient​`,
            description_ar: `ارفع مغامرتك إلى آفاق جديدة.
يدعوك منتجع Tuaja Adventure إلى عالم من المغامرات المبهجة والأنشطة المليئة بالمرح لك ولأصدقائك وعائلتك. تواصل مع نفسك وأحبائك من خلال تجارب مصممة لتقوية الروابط وخلق علاقات دائمة
ذكريات، يوم آنا نينت`
        },
    ]
    const staticJournalData = {
        heading_en: 'EXPERIENCE NATURE.IMMERSEFULLY',
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
    const OutDoorData = [
        {
            title_en: 'Outdoor Play Area',
            title_ar: 'مساحات اللعب للأطفال في الهواء الطلق',
            description_en: `The outdoor play area is intricately created for children to explore, where they get to engage in thrilling activities and interact directly with nature.`,
            description_ar: `في منطقة اللعب الخارجية، تم تصميم كل ركن بعناية ليتيح للأطفال فرصة الاستكشاف والانغماس في أنشطة مليئة بالإثارة، مما يتيح لهم التفاعل مع الطبيعة بشكل مباشر. `,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED4564-1.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const AdventureData = [
        {
            title_en: 'Adventure Experiences',
            title_ar: 'تجارب السياحة الزراعية الفاخرةتجارب المغامرات',
            description_en: `Tuaja Adventure Resort opens the doors to thrilling experiences where adrenaline and the feeling of ultimate freedom prevail. Climb mountains on hiking trails, ride bikes through the hills, or discover the depths and secrets of nature on horseback. Every moment here promises you an unforgettable experience.`,
            description_ar: `منتجع توجة للمغامرات يفتح لك أبواب التجارب المشوّقة حيث الأدرينالين والشعور بالحرية المطلقة. تسلق الجبال عبر مسارات الهايك، وانطلق بالدراجات بين التلال ، أو اكتشف عمق الطبيعة وأسرارها على ظهر الخيل. كل لحظة هنا تُعدّك بتجربة لا تُنسى`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED1857.jpg',
                alt: 'talking blue',
            },
        },
    ];
    const BonFireData = [
        {
            title_en: 'Stargazing and Bon fires',
            title_ar: `مراقبة النجوم والنيران المشتعلة`,
            description_en: `Break free into the abyss of the twinkling night sky and the warmth of a crackling bone fire, where you get to bond with nature and everyone else sharing these special moments with you.`,
            description_ar: `​
بعيدا عن صخب الحياة اليومية، اغمر نفسك في سماء الليل المتلألئة بنجومها، واستمتع بدفء النيران . هنا، يمكنك التواصل مع الطبيعة ومع من يشاركونك هذه اللحظات الفريدة، لتجربة من السكينة والهدوء تجمعك مع جمال الكون.`,
            isButton: false,
            isHeading: true,
            imageData: {
                src: '/_CED2502-1.jpg',
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
                src: '/adbantureLogo1.svg',
                alt: 'blue',
            },
            heading_en: 'DISCOVER YOUR MUSE AT TUAJA ADVENTURE RESORT, AL AHSA',
            heading_ar: `اكتشف مصدر إلهامك في منتجع توجة للمغامرات، الأحساء`,
            text_en: `Tuaja Adventure Resort offers a thrilling escape, channeling the dynamic energy of Al Ahsa expansive landscapes into a hub designed for fun, adventure, and discovery.`,
            text_ar: `يوفر منتجع Tuaja Adventure ملاذًا مثيرًا، حيث يوجه الطاقة الديناميكية للمناظر الطبيعية الواسعة في الأحساء إلى مركز مصمم للمتعة والمغامرة والاكتشاف.`,
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
            <ImageTextComponent data={Data} paddingX={40} color="#a3405d" flexDirection={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }} />;
            <CenterHeadingText width={{ base: '100%', md: '60%' }} data={centerHeadingTextData} color="#a3405d" />
            <Box marginY={20}>
                <JournalCardComponent bg={"url(/Image-02.png)"} heading_en={staticJournalData.heading_en} heading_ar={staticJournalData.heading_ar} color="white" data={staticJournalData.data} color_btn={""} />
            </Box>
            <ImageTextComponent1 data={AdventureData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="#a3405d" />
            <ImageTextComponent1 data={OutDoorData} color="#a3405d" flexDir={{ base: 'column', md: isRTL ? 'row-reverse' : 'row' }} />
            <ImageTextComponent1 data={BonFireData} flexDir={{ base: 'column', md: isRTL ? 'row' : 'row-reverse' }} color="#a3405d" />
            <Box position="relative" width="100%" height="190px">
                <Image
                    src="/pattern-01.gif"
                    alt="ss"
                    layout="fill"
                    objectFit="cover"
                />
            </Box>
            <ImageHeaderComponent colors="#a3405d" data={ImageHeaderComponentData2} />
            <SubFooter />
            <Footer />
        </>
    )
}

export default AdventureResort;