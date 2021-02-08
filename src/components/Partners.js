import React, { Component } from 'react'
import Slider from "react-slick";

export default class Partners extends Component {
    
    render() {
        if(!partners){
            return(
                <div className="center-text">Loading...</div>
            )
        } else {
            return (
                <Slider {...settings1}>
                    {shuffle(partners).map((partner, index) => (
                        <div key={index}>
                            <a 
                                href={partner.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                >        
                                <img
                                    className={`responsive ${partner.picSize}`}
                                    alt="partner logo"
                                    src={partner.picPath}
                                    />
                            </a>
                        </div>
                        ))}
                </Slider>
                
            )
        }
        
    }
}

const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    variableWidth: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const partners = [
    {
        webUrl: `https://www.adl.org/`,
        picPath: require("../assets/images/partner-logos/ADL.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.alz.org/`,
        picPath: require("../assets/images/partner-logos/Alz.png"),
        picSize: "large"
    },
    {
        webUrl: `https://democracymonth.org/`,
        picPath: require("../assets/images/partner-logos/American-Dem.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://attolloprep.org/`,
        picPath: require("../assets/images/partner-logos/attollo.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.benderjccgw.org/`,
        picPath: require("../assets/images/partner-logos/bender-jccgw.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://bipartisanpolicy.org/`,
        picPath: require("../assets/images/partner-logos/Bipartisan-Policy-Center-BPC.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.marylandblueprint.org/`,
        picPath: require("../assets/images/partner-logos/Blueprint-for-Md-Future.png"),
        picSize: "small"
    },
    {
        webUrl: `https://brothersacademy.org/`,
        picPath: require("../assets/images/partner-logos/Brothers.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.ripkenfoundation.org/`,
        picPath: require("../assets/images/partner-logos/Cal-Ripken.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.calvaryservices.org/`,
        picPath: require("../assets/images/partner-logos/calvary-womens-services.png"),
        picSize: "large"
    },
    {
        webUrl: `https://wearecasa.org/`,
        picPath: require("../assets/images/partner-logos/Casa-de-MD.png"),
        picSize: "small"
    },
    {
        webUrl: `http://www.committeeformontgomery.org/`,
        picPath: require("../assets/images/partner-logos/CFM.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.christopherreeve.org/`,
        picPath: require("../assets/images/partner-logos/ChrisReeve.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://civicnation.org/`,
        picPath: require("../assets/images/partner-logos/civic-nation.png"),
        picSize: "small"
    },
    {
        webUrl: `https://dccap.org/`,
        picPath: require("../assets/images/partner-logos/DC-College.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://hamptonroads.dressforsuccess.org/`,
        picPath: require("../assets/images/partner-logos/DFS.png"),
        picSize: "large"
    },
    {
        webUrl: `https://discoverylandcofoundation.org/`,
        picPath: require("../assets/images/partner-logos/Discovery-Land.png"),
        picSize: "large"
    },
    {
        webUrl: `http://www.dbcr.org/`,
        picPath: require("../assets/images/partner-logos/Don-Bosco.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.driventocure.org/`,
        picPath: require("../assets/images/partner-logos/Driven-to-Cure.png"),
        picSize: "small"
    },
    {
        webUrl: `https://md.emergeamerica.org/`,
        picPath: require("../assets/images/partner-logos/Emerge.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.fightforchildren.org/`,
        picPath: require("../assets/images/partner-logos/FFC.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.montgomerycountymd.gov/volunteercenter/Fund-for-Montgomery.html`,
        picPath: require("../assets/images/partner-logos/FFM.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://freestate-justice.org/`,
        picPath: require("../assets/images/partner-logos/FreeState.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://nationalzoo.si.edu/membership`,
        picPath: require("../assets/images/partner-logos/FriendsoftheNationalZoo.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mightycause.com/organization/Ghsef`,
        picPath: require("../assets/images/partner-logos/GHS-FDN.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.thecommunityfoundation.org/montgomery`,
        picPath: require("../assets/images/partner-logos/GWCF.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://heartsandhomes.org/`,
        picPath: require("../assets/images/partner-logos/HH.png"),
        picSize: "meium"
    },
    {
        webUrl: `https://hispanicheritage.org/`,
        picPath: require("../assets/images/partner-logos/Hispanic-Heritage-Foundation.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.housingunlimited.org/`,
        picPath: require("../assets/images/partner-logos/HU.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://identity-youth.org/`,
        picPath: require("../assets/images/partner-logos/Identity.png"),
        picSize: "small"
    },
    {
        webUrl: `https://imaginationstage.org/`,
        picPath: require("../assets/images/partner-logos/imagination-stage.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.hopkinsmedicine.org/kimmel_cancer_center/`,
        picPath: require("../assets/images/partner-logos/JHM.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.lancfound.org/`,
        picPath: require("../assets/images/partner-logos/LCCF.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.lls.org/`,
        picPath: require("../assets/images/partner-logos/LLS.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://leadershipmontgomerymd.org/`,
        picPath: require("../assets/images/partner-logos/LM.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.louriecenter.org/LC/`,
        picPath: require("../assets/images/partner-logos/lourie-center.png"),
        picSize: "large"
    },
    {
        webUrl: `https://www.wish.org/`,
        picPath: require("../assets/images/partner-logos/Make-a-Wish.png"),
        picSize: "large"
    },
    {
        webUrl: `https://www.seeforever.org/`,
        picPath: require("../assets/images/partner-logos/Maya-Angelou.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mybrotherskeeperpgcounty.com/home.html`,
        picPath: require("../assets/images/partner-logos/MBK-Prince-Georges-County.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mcbushalloffame.com/`,
        picPath: require("../assets/images/partner-logos/MCBHF.png"),
        picSize: "small"
    },
    {
        webUrl: `https://www.mcccmd.com/`,
        picPath: require("../assets/images/partner-logos/MCCC-Public-Safety-Awards.png"),
        picSize: "small"
    },
    {
        webUrl: `https://mcch.net/`,
        picPath: require("../assets/images/partner-logos/MCCH.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mcpsfoundation.org/`,
        picPath: require("../assets/images/partner-logos/MCPS-Ed-Foundation.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.montgomeryschoolsmd.org/departments/partnerships/summer-rise/`,
        picPath: require("../assets/images/partner-logos/mcps-summer-rise.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://mcshf.org/mcshf-inductees/`,
        picPath: require("../assets/images/partner-logos/MCSHF.png"),
        picSize: "large"
    },
    {
        webUrl: `https://www.mdlo.org/`,
        picPath: require("../assets/images/partner-logos/MDLO.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mcpf-md.org/`,
        picPath: require("../assets/images/partner-logos/Moco-Police-Foundation.png"),
        picSize: "large"
    },
    {
        webUrl: `https://prochoicemd.org/`,
        picPath: require("../assets/images/partner-logos/NARAL.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.nccf-cares.org/`,
        picPath: require("../assets/images/partner-logos/nccf.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://nationalchildrensmuseum.org/`,
        picPath: require("../assets/images/partner-logos/ncm.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://nourishnow.org/`,
        picPath: require("../assets/images/partner-logos/Nourish-Now.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://nationalchildrensmuseum.org/`,
        picPath: require("../assets/images/partner-logos/ncm.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://jon-randall-5kdd.squarespace.com/`,
        picPath: require("../assets/images/partner-logos/Our-voices-matter.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.ahealthieramerica.org/`,
        picPath: require("../assets/images/partner-logos/PFHA.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.peerhealthexchange.org/`,
        picPath: require("../assets/images/partner-logos/PHE.png"),
        picSize: "medium"
    },
    {
        webUrl: `#`,
        picPath: require("../assets/images/partner-logos/Please-Be-Seated.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://patrickshifflettfoundation.org/`,
        picPath: require("../assets/images/partner-logos/PSF.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://thequinceorchardproject.com/`,
        picPath: require("../assets/images/partner-logos/Quince-Orchard-Project.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://www.rainbowplace.org/`,
        picPath: require("../assets/images/partner-logos/RainbowPlace.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.sierraclub.org/maryland`,
        picPath: require("../assets/images/partner-logos/Sierra-club.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.somd.org/`,
        picPath: require("../assets/images/partner-logos/SO.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.stanns.org/`,
        picPath: require("../assets/images/partner-logos/St-ann.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://storytapestries.org/`,
        picPath: require("../assets/images/partner-logos/story-tap.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://ww5.komen.org/`,
        picPath: require("../assets/images/partner-logos/Susan-Komen.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://bbardc.org/project/thearc/`,
        picPath: require("../assets/images/partner-logos/THEARC.png"),
        picSize: "small"
    },
    {
        webUrl: `https://nationalmall.org/`,
        picPath: require("../assets/images/partner-logos/TNM.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.usmfoundation.com/s/1149/foundation/start.aspx`,
        picPath: require("../assets/images/partner-logos/Uni-system-md.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://shadygrove.umd.edu/`,
        picPath: require("../assets/images/partner-logos/USG.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.ushersyndromesociety.org/`,
        picPath: require("../assets/images/partner-logos/usher-syndrome.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.mlb.com/nationals/community/philanthropies`,
        picPath: require("../assets/images/partner-logos/Washing-dream.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.washingtonballet.org/`,
        picPath: require("../assets/images/partner-logos/washington-ballet.png"),
        picSize: "medium"
    },
    {
        webUrl: `http://worldseriesofe.com/`,
        picPath: require("../assets/images/partner-logos/World-series-of-entreprenuership.png"),
        picSize: "medium"
    },
    {
        webUrl: `https://www.youngleadersinstitute.org/`,
        picPath: require("../assets/images/partner-logos/YLI.png"),
        picSize: "medium"
    }
]

