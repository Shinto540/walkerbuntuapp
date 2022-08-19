import Link from "next/link";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import Footer from "../home/Footer";

const about = () => {
  return (
    <>
    <main className="bg-gray-100 pb-16">
      <section
        className={`${styles.about__header} text-white uppercase flex items-center justify-center h-[40vh] relative`}
      >
        <div>
          <h3 className="text-5xl font-bold text-white uppercase">About us</h3>
        </div>
        <div className={`${styles.about__nav} absolute`}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span>/ About Us</span>
        </div>
      </section>

      <section
        className={`${styles.about__body} top-[10%] grid grid-cols-2 w-[90%] mt-16 mx-auto py-12 px-[60px] bg-white`}
      >
        <div className={`${styles.about__image} relative w-[40vw] h-[450px] `}>
          <Image src="/about/about.png" alt="about" layout="fill" />
        </div>
        <div className={`${styles.about__content} relative`}>
          <div className="absolute left-[-200px] top-[10%] w-[600px] py-10 px-12 bg-gray-200 text-[12px]">
            <div className="mb-6">
            <h1 className="font-bold text-lg">ABOUT HURST</h1>
            <div className="border-b-2 border-gray-300 w-[45px]"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim
              ad minim veniam, ommodo consequa. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia is be deserunt
              mollit anim id est laborum.
            </p>
            <p className="my-4">
              Sed ut perspiciatis unde omnis iste natus error sit. voluptatem
              accusantium doloremque laudantium, totam remes aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default about;
