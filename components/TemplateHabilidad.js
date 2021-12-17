import Image from "next/image"
const TemplateHabilidad = ({nombre,src}) => {
    return (
        <div>
            <section>
            <Image
            src={src}
            height={64}
            width={64}
            /> 
            </section>
            <nav>
                <span>{nombre}</span>
            </nav>
        </div>
    )
}

export default TemplateHabilidad
