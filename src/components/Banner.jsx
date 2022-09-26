import bannerImg from '../assets/melhor-smartwatch-1.jpg'


export default function Banner() {
    return (
        <div className="bg-cover bg-no-repeat bg-center m-0 w-auto">
            <img src={bannerImg} alt="" className="" />
        </div>
    )
}