import force from '../../images/airForce.png';
import max from '../../images/airMax.png';
import star from '../../images/superstar.png';
import smith from '../../images/stanSmith.png';
import low from '../../images/lowVulcanized.png';
import industrial from '../../images/industrialBoots.png';
import zoom from '../../images/nikeZoom.png';
import astra from '../../images/astraRun.png';
import chuck from '../../images/chuckVulcanized.png';
import romy from '../../images/romy.png';
import pumps from '../../images/pumps.png';
import velvet from '../../images/velvetBlack.png';
import laminated from '../../images/laminatedLambskin.png';
import opyum from '../../images/yves.png';
import black from '../../images/black.png';
import albus from '../../images/albus.png';
import cocoon from '../../images/cocoon.png';
import metal from '../../images/metallicoptik.png';






export let productsMenArray=[
    {
        name: "Air Force",
        color: "White",
        size: 40,
        price: 80,
        brand:"Nike",
        image: force
    },

    {
        name: "Air Max",
        color: "Black",
        size: 38,
        price: 120,
        brand:"Nike",
        image: max
    },

    {
        name: "Superstar",
        color: "Black",
        size: 39,
        price: 110,
        brand:"Adidas",
        image: star
    },

    {
        name: "Stan Smith",
        color: "White",
        size: 40,
        price: 60,
        brand:"Adidas",
        image: smith
    },

    {
        name: "Low Vulcanized",
        color: "Black",
        size: 38,
        price: 255,
        brand:"Off-White",
        image: low
    },

    {
        name: "Industrial Boots",
        color: "Black",
        size: 39,
        price: 800,
        brand:"Off-White",
        image: industrial
    },

    {
        name: "Nike Zoom",
        color: "Red",
        size: 40,
        price: 140,
        brand:"Nike",
        image: zoom
    }, 

    {
        name: "Chuck Vulcanized",
        color: "White",
        size: 39,
        price: 600,
        brand:"Off-White",
        image: chuck
    },

    {
        name: "Astrarun",
        color: "Black",
        size: 40,
        price: 140,
        brand:"Adidas",
        image: astra
    }
]

export let productsWomenArray = [
    {
        name: "Pumps in black glitter",
        color: "Black",
        size: 38,
        price: 750,
        brand:"Jimmy Choo",
        image: romy
    },
    
    {
        name: "Glitter Pumps",
        color: "White",
        size: 39,
        price: 320,
        brand:"Jimmy Choo",
        image: pumps
    },

    {
        name: "Black Velvet",
        color: "Black",
        size: 40,
        price: 1325,
        brand:"Chanel",
        image: velvet
    },

    {
        name: "Laminated Lambskin",
        color: "White",
        size: 38,
        price: 800,
        brand:"Chanel",
        image: laminated
    },

    {
        name: "Opyum in Vernice",
        color: "Black",
        size: 40,
        price: 1550,
        brand:"Yves Saint Laurent",
        image: opyum
    },

    {
        name: "Décolleté D’Orsay",
        color: "Black",
        size: 38,
        price: 975,
        brand:"Yves Saint Laurent",
        image: black
    }

]

export let productsChildrenArray =[
    {
        name: "Albus Sneakers",
        color: "colored",
        size: 38,
        price: 60,
        brand:"Naturino",
        image: albus
    },

    {
        name: "Cocoon Sneakers",
        color: "Colored",
        size: 38,
        price: 80,
        brand:"Naturino",
        image: cocoon
    },

    {
        name: "Metallicoptik Sneakers",
        color: "Black",
        size: 38,
        price: 50,
        brand:"Naturino",
        image: metal
    }
]

export let productsAllArray = productsMenArray.concat(productsWomenArray,productsChildrenArray); 