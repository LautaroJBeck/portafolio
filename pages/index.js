import {useState,useEffect} from "react";
import black from "../styles/BlackMode.module.css"
import white from "../styles/WhiteMode.module.css"
import Head from "next/head"
import Image from "next/image"
import TemplateHabilidad from "../components/TemplateHabilidad"
import TemplateProyectos from "../components/TemplateProyectos"
export default function Home() {
  const [backgroundColor,setBackgroundColor]=useState("")
  const [spanish,setSpanish]=useState();
  const [botonAbierto,setBotonAbierto]=useState(false)
  const firstTime=()=>{
    if(localStorage.getItem("spanish")){
      setSpanish(JSON.parse(localStorage.getItem("spanish")))
    }else{
      localStorage.setItem("spanish",true);
      setSpanish(true)
    }
    if(localStorage.getItem("background-color")){
      setBackgroundColor(localStorage.getItem("background-color"));
    }else{
      localStorage.setItem("background-color","black");
      setBackgroundColor("black");
    }


  }
  const handleBoton=()=>{
    if(botonAbierto){
      setBotonAbierto(false)
    }else{
      setBotonAbierto(true)
    }
  }
  const handleColor=()=>{
    if(backgroundColor=="black"){
      setBackgroundColor("white")
      localStorage.setItem("background-color","white");
    }else if(backgroundColor=="white"){
      setBackgroundColor("black")
      localStorage.setItem("background-color","black");
    }
  }
  const handleTyped=()=>{
    const typed=new Typed(`.typed`,
    {
      strings:["Full stack developer","Coder","Self-taught developer"],
      showCursor:false,
      loop:true,
      backDelay:1500,
      typeSpeed:75,
      backSpeed:75
      
    }
    )
  }
  const handleIdiom=(idioma)=>{
      setSpanish(idioma)
      localStorage.setItem("spanish",idioma);
  }
  useEffect(()=>{
    firstTime();
    handleTyped()
  },[])
  return (
    <>
    <header className={backgroundColor=="black"? black.header_container : white.header_container}>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css" integrity="sha512-+mlclc5Q/eHs49oIOCxnnENudJWuNqX5AogCiqRBgKnpoplPzETg2fkgBFVC6WYUVxYYljuxPNG8RE7yBy1K+g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="icon" type="image/png" href="/img/icon.png" />
      <title>Lautaro Beck - Portafolio</title>
      icon
      </Head>
      {/**/}
      {backgroundColor=="black"?
      <style jsx global>{`
      body{
        background-color:rgb(34,34,34)
      }
      body::-webkit-scrollbar{
      width:10px; 
      background:rgb(24,24,24); 
      }
      body::-webkit-scrollbar-thumb{
        background:rgb(252,252,252);
        border-radius:5px;
      }
      `}</style>:
      <style jsx global>{`
      body{
        background-color:rgb(252,252,252)
      }
      body::-webkit-scrollbar{
        width:10px; 
        background:rgb(255,255,255); 
      }
      body::-webkit-scrollbar-thumb{
        background:rgb(102,102,102);
        border-radius:5px;
        transition:1s ease;
      }
      `}</style>}
     <nav>
      <div className={backgroundColor=="black"?black.div_title:white.div_title}>
        <span>{"<LB/>"}</span>
      </div>
      <article>
      <div className={backgroundColor=="black"?black.div_links:white.div_links}>
        <a href="#home">{spanish?"Inicio":"Home"}</a>
        <a href="#about-me">{spanish?"Sobre mi":"About me"}</a>
        <a href="#skills">{spanish?"Habilidades":"Skills"}</a>
        <a href="#projects">{spanish?"Proyectos":"Projects"}</a>
        <a href="#contact">{spanish?"Contacto":"Contact"}</a>
      </div>
      <div className={backgroundColor=="black"?black.div_mode:white.div_mode}>
        <button onClick={()=>handleColor()}><i className={`${backgroundColor=="black"?"fa-solid fa-moon":"fa-solid fa-sun"}`}></i></button>
        <p>
          <span onClick={()=>handleIdiom(true)}>ES</span>
          |
          <span onClick={()=>handleIdiom(false)}>EN</span>
        </p>
      </div>
      <button onClick={()=>handleBoton()} className={`
      ${backgroundColor=="black"?black.hamburger:white.hamburger} ${backgroundColor=="black"?black.hamburger__squeeze:white.hamburger__squeeze} 
      ${(backgroundColor=="black"&&botonAbierto)&&black.is_active}
      ${(backgroundColor!=="black"&&botonAbierto)&&white.is_active}
      `} type="button">
        <span className={backgroundColor=="black"? black.hamburger_box:white.hamburger_box}>
          <span className={backgroundColor=="black"?black.hamburger_inner:white.hamburger_inner}></span>
        </span>
      </button>

      </article>
     </nav>
    </header>
    {botonAbierto&&<div className={backgroundColor=="black"?black.fondo_negro:white.fondo_negro}></div>}
    <section className={`
    ${backgroundColor=="black"?black.mostrar_section:white.mostrar_section} 
    ${(backgroundColor=="black"&&!botonAbierto)&&black.ocultar_section}
    ${(backgroundColor!=="black"&&!botonAbierto)&&white.ocultar_section}

    `}>
      <div onClick={()=>handleColor()}>
        <i className={`${backgroundColor=="black"?"fa-solid fa-moon":"fa-solid fa-sun"}`}></i>
        {spanish?
        <span>{backgroundColor=="black"?"Oscuro":"Claro"}</span>  
        :
        <span>{backgroundColor=="black"?"Dark":"Light"}</span>
      }
      </div>
      {spanish
        ?
          <div onClick={()=>handleIdiom(false)}>
            <i>ES</i>
            <span>Español</span>
          </div>
        :
          <div onClick={()=>handleIdiom(true)}>
            <i>EN</i>
            <span>English</span>
          </div>  
      }
    </section>
    <span className={`
    ${backgroundColor=="black"?black.mostrar_span:white.mostrar_span} 
    ${(backgroundColor=="black"&&!botonAbierto)&&black.ocultar_span}
    ${(backgroundColor!=="black"&&!botonAbierto)&&white.ocultar_span}
    `}>
        <a onClick={()=>handleBoton()} href="#home">{spanish?"Inicio":"Home"}</a>
        <a onClick={()=>handleBoton()} href="#about-me">{spanish?"Sobre mi":"About me"}</a>
        <a onClick={()=>handleBoton()} href="#skills">{spanish?"Habilidades":"Skills"}</a>
        <a onClick={()=>handleBoton()} href="#projects">{spanish?"Proyectos":"Projects"}</a>
        <a onClick={()=>handleBoton()} href="#contact">{spanish?"Contacto":"Contact"}</a>
    </span>
    <main>
      <article id="home" className={backgroundColor=="black"?black.home_img_container:white.home_img_container}>
        <Image 
        src="/img/resized.jpg"
        className={black.home_img} 
        alt="Hero Image"
        layout="fill"
        />
        <div className={backgroundColor=="black"?black.oscurecer_fondo:white.oscurecer_fondo}></div>
      </article>
      <div className={backgroundColor=="black"?black.hero_title_container:white.hero_title_container}>
          <h1>Lautaro Beck</h1>
          <p className="typed"></p>
      </div>
      <section id="about-me" className={backgroundColor=="black"?black.about_me_container:white.about_me_container}>
        <div className={backgroundColor=="black"?black.about_me_img:white.about_me_img}>
          <div className={backgroundColor=="black"?black.img_wrapper:white.img_wrapper}>          
            <Image
            src="/img/study.svg"
            layout="fill"
            alt="Study"
            />
          </div>
        </div>
        <div className={backgroundColor=="black"?black.about_me_text:white.about_me_text}>
          <h2><span>{spanish?"Sobre mí":"About me"}</span></h2>
          <p>{spanish?
          "Soy un desarrollador de Concepción-Paraguay, con conocimientos en el Front-end, y Back-end, completamente autodidacta y con una gran pasión por aprender"
          :
          "I'm a web developer from Concepcion-Paraguay, with knowledges on the Front-end, and also on the Back-end. I'm fully self-taught, and i have a big passion to learn"
          }
          </p>
        </div>
      </section>
      <section id="skills" className={backgroundColor=="black"?black.habilidades_container:white.habilidades_container}>
        <div className={backgroundColor=="black"?black.habilidades_text:white.habilidades_text}>
          <div>
          <h2><span>{spanish?"Kit de habilidades":"Skills set"}</span></h2>
          <p>{spanish?"Estas son algunas tecnologías que soy capaz de usar":"These are some technologies that I'm able to use"}</p>
          </div>
        </div>
        <div className={backgroundColor=="black"?black.habilidades_logos:white.habilidades_logos}>
          {["HTML","CSS","JavaScript","React.js","Next.js","Bootstrap","Figma","Node.js","MongoDB","MySQL"].map((el,key)=>(
            <TemplateHabilidad key={key} nombre={el} src={`/img/icons/${el}.png`}/>
          ))}
        </div>
      </section>
      <section id="projects" className={backgroundColor=="black"?black.proyectos_container:white.proyectos_container}>
        <h2><span>{spanish?"Algunos de mis proyectos":"Some of my projects"}</span></h2>
        <div className={backgroundColor=="black"?black.proyectos_img_container:white.proyectos_img_container}>
          <TemplateProyectos 
          url={"https://pokemon-api-delta.vercel.app/"} 
          title="PokeAPI" 
          img="/img/proyects/pokeapi.png"
          parrafo={spanish?"PokeAPI es una página web hecha con Next.js, que consulta a una API y permite ver un listado de pokemones":"PokeAPI is a website made with Next.js, which consults an API and allows you to see a list of pokemons"}
          />
          <TemplateProyectos 
          url={"https://pokemon-api-delta.vercel.app/"} 
          title="CryptoAPP" 
          img="/img/proyects/cryptoapp.png"
          parrafo={spanish?"Es una aplicación que consulta a la API de CoinGecko, y muestra el top 100 de las criptomonedas con mas capitalización de mercado":"It's an application that consults the CoinGecko API, and shows the top 100 of the cryptocurrencies with the most market capitalization"}
          />
          <TemplateProyectos 
          url={"https://buscador-alpha.vercel.app/"} 
          title={spanish?"Buscador de artistas":"Artists searcher" }
          img="/img/proyects/scren.png"
          parrafo={spanish?"Página hecha con Next.js, consulta a una API y muestra en pantalla al artista o banda que insertaste en el buscador":"Webiste made Next.js, it consults an API and show on the screen the artist or band that you inserted in the search engine"}
          />
        </div>
      </section>
      <section id="contact" className={backgroundColor=="black"?black.contacto_container:white.contacto_container}>
        <div className={backgroundColor=="black"?black.contacto_img_container:white.contacto_img_container}>
            <div className={backgroundColor=="black"?black.contacto_wrapper:white.contacto_wrapper}>
              <Image
              src="/img/programming.svg"
              layout="fill"
              />
            </div>
        </div>
        <div className={backgroundColor=="black"?black.contacto_text_container:white.contacto_text_container}>
          <h2><span>{spanish?"Contáctame":"Contact me"}</span></h2>
          <article>
            <div>
              <section>
                <i className="fa-solid fa-envelope"></i>
                <h4><span>{spanish?"Correo":"Gmail"}</span></h4>
                <span className={backgroundColor=="black"?black.span_final:white.span_final}>lautarobeck.programmer@gmail.com</span>
              </section>
              <section>
                <i className="fa-solid fa-phone"></i>
                <h4><span>{spanish?"Teléfono":"Phone number"}</span></h4>
                <span className={backgroundColor=="black"?black.span_final:white.span_final}>(+595) 976 832 795</span>
              </section>
            </div>
          </article>
          <div className={backgroundColor=="black"?black.brands_container:white.brands_container}>
              <a href="https://github.com/LautaroJBeck" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=595976832795&text&app_absent=0" target="_blank" rel="noopener"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.instagram.com/lautarobeck_/" target="_blank" rel="noopener"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
      </section>
    </main>
    </>
  )
}
