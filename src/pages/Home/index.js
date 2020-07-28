import React from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import dadosIniciais from "../../data/dados_iniciais.json";

function Home() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          "Jocko Willink, autor do best-seller: Extreme Ownership: How U.S. Navy SEALs Lead and Win (sem versão traduzida para o português), oferece alguns conselhos práticos, porém difíceis de aprender. Tudo começa com a disciplina. Esse é o caminho para a realização pessoal e para o sucesso. "
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
      <Footer />
    </div>
  );
}

export default Home;
