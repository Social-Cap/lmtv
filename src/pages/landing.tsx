import HeaderComp from '../components/header'
import FooterComp from '../components/footer'
import HeroComp from '../components/hero'
import FeaturesComp from '../components/features'

const headerLinks = [
    {
      link: "https://example.com", 
      label: "your label"
    },
    ] 

export default function LandingPage() {
    
    return(
        <>
            <HeaderComp links={headerLinks}/>
            <HeroComp/>
            <FeaturesComp/>
            <FooterComp/>
        </>
    )
}