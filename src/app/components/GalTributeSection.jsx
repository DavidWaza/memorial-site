"use client";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GalTributeSection() {
  const sections = [
    {
      img: `https://res.cloudinary.com/ddwkojhaj/image/upload/v1683385151/263077030_6855465971131917_2427333366931755629_n_hgroeg.jpg`,
      title: "Gallery",
      link: "/gallery",
    },
    {
      img: `https://res.cloudinary.com/ddwkojhaj/image/upload/v1683385153/298209723_8168703349808166_1260154859052573940_n_ic4rtf.jpg`,
      title: "Tribute",
      link: "/tribute",
    },
  ];
  return (
    <Container className="pt-20">
      <Row>
        {sections.map(({ img, title, link }, index) => (
          <Col sm={6} key={index}>
            <div className="block md:hidden">
              <div className="text-[30px] my-2 text-center">{title}</div>
            </div>
            <Link href={link}>
              <motion.div
                whileHover={1.1}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.9, 0.71, 0.7, 1.01],
                }}
                className="pere"
              >
                <img src={img} alt="photo" />
                <div className="overlay"></div>
                <div className="sectiontitle">
                  <p className="primary_font text-white secondary_font-size hover:text-black">
                    {title}
                  </p>
                  <hr className="hr-white" />
                </div>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
