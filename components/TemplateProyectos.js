import Image from "next/image"
const TemplateProyectos = ({url,img,title,parrafo}) => {
    return (
        <a target="_blank" rel="noopener" href={url}>
            <article>
                <Image
                src={img}
                alt={title}
                layout="fill"
                priority/>
            </article>
            <div>
                <h3>{title}</h3>
                <p>{parrafo}</p>
            </div>
        </a>
    )
}

export default TemplateProyectos
