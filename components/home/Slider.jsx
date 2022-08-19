import Image from "next/image";
import Button from "../Button";
import styles from "../../styles/Slider.module.css";
import { useEffect, useState } from "react";

const Slider = () => {
  const contents = [
    {
      id: 1,
      title: "welcome to our",
      brandName: "mchongotz e-shop",
      subTitle: "gallery 2021",
      desc: "",
      image: "slide-1.png",
    },
    {
      id: 2,
      title: "welcome to our",
      brandName: "mchongotz e-shop",
      subTitle: "gallery 2021",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.",
      image: "slide-2.png",
    },
    {
      id: 3,
      title: "welcome to our",
      brandName: "mchongotz e-shop",
      subTitle: "gallery 2021",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.",
      image: "slide-3.png",
    },
  ];

  return (
    <section className={styles.slider}>
      <div className={styles.slider__area}>
        <div className={styles.slider__image}>
          <ImageSlides contents={contents} />
        </div>
        <div className={styles.slider__directions}>
          <div className="slider__direction">
            <div className={styles.slider__progress}>
              <span></span>
            </div>
            <SliderContent contents={contents} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageSlides = ({ contents }) => {
  return (
    <>
      {contents.map((image, index) => {
        return (
          <Image
            key={index}
            src={`/slider/${image.image}`}
            alt={image.image}
            title={image.image}
            layout={"fill"}
          />
        );
      })}
    </>
  );
};

const SliderContent = ({ contents }) => {
  let [currentContent, setCurrentContent] = useState();

  useEffect(() => {
    setSlider(currentContent, setCurrentContent);
  }, [currentContent]);

  return (
    <>
      {contents.map((content, index) => {
        if (index === currentContent) {
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
                <p>{content.desc}</p>
              </div>
              <div className={styles.slider__button}>
                <Button text="Shop Now" style="text-xl p-3" />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

function setSlider(index, func) {
  func(0);

  setInterval(() => {
    func(index);
  }, 4000);
}

export default Slider;
