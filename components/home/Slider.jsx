import Image from "next/image";
import Button from "../Button";
import styles from "../../styles/Slider.module.css";

const Slider = () => {
  return (
    <section className={styles.slider__area}>
      <div className={styles.slider__image}>
        <ImageSlides />
      </div>
      <div className={styles.slider__directions}>
        <SliderDirection />
      </div>
    </section>
  );
};

const ImageSlides = () => {
  const images = [
    {
      src: "/slider/slide-3.png",
      alt: "slide-1",
      title: "#slider-direction-1",
    },
  ];

  return (
    <>
      {images.map((image, index) => {
        return (
          <Image
            key={index + 1}
            src={image.src}
            alt={image.alt}
            title={image.title}
            layout={"fill"}
          />
        );
      })}
    </>
  );
};

const SliderDirection = () => {
  const dirs = [1];

  return (
    <>
      {dirs.map((dir, index) => {
        return (
          <div
            key={index}
            id={`slider-direction-${dir}`}
            className="t-cn slider-direction"
          >
            <SliderProgress />
            <SliderContent />
          </div>
        );
      })}
    </>
  );
};

const SliderContent = () => {
  const contents = [
    {
      title: "welcome to our",
      brandName: "mchongotz e-shop",
      subTitle: "gallery 2021",
    },
  ];

  return (
    <>
      {contents.map((content, index) => {
        return (
          <div key={index}>
            <div className={styles.slider__content}>
              <h1>
                <span className={styles.slider__title}>{content.title}</span>
                <br />
                <span className={styles.slider__brand}>
                  {content.brandName}
                </span>
                <br />
                <span className={styles.slider__subTitle}>
                  {content.subTitle}
                </span>
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there hidden in the middle of text.{" "}
              </p>
            </div>
            <Button text="Shop Now" style="text-xl p-3" />
          </div>
        );
      })}
    </>
  );
};

const SliderProgress = () => {
  return <div className="slider-progress"></div>;
};

export default Slider;
