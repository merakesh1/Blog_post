import { createContext } from "react";
import React from 'react';
import Vk from '../Assets/vk.jpg';
import Rohit from '../Assets/rohit.jpg';
import Siraj from '../Assets/Siraj.jpg';
import Jadeja from '../Assets/jadeja.jpg';
import Gill from '../Assets/sgill.jpg';
import Axar from '../Assets/axarpatel.jpg';
import Mdshami from '../Assets/mshami.jpg';
import JBumrah from '../Assets/jbumrah.jpg';
import Ashwin from '../Assets/ashwin.jpg';
import KlRahul from '../Assets/klrahul.jpg';


const BlogPostsContext = createContext("");
const BlogPosts = ({ children }) => {
    const Blogs = {
        1:{
            "subject": "Virat Kohli",
            "description": "A masterful batsman, a fierce competitor, and the heartbeat of Indian cricket",
            "img":Vk
        },
        2:{
            "subject": "Rohit Sharma",
            "description": "The 'Hitman' of cricket, crafting centuries with elegance and rewriting records with grace",
            "img":Rohit
        },
        3:{
            "subject": "Md Siraj",
            "description": "From humble beginnings to conquering cricket's grand stage, Mohammed Siraj's journey embodies resilience, determination, and the spirit of triumph",
            "img":Siraj
        },
        4:{
            "subject": "Ravindra Jadeja",
            "description": " A cricketing dynamo, blending all-round brilliance with a touch of magic on the field. A true force to be reckoned with",
            "img":Jadeja
        },
        5:{
            "subject": "Shubman Gill",
            "description": "A young maestro at the crease, displaying elegance and promise with every stroke. The future of Indian cricket shines bright with his talent",
            "img":Gill
        },
        6:{
            "subject": "Axar Patel",
            "description": "A crafty left-arm spinner, weaving a web of precision on the cricket field. His accuracy and versatility make him a formidable force in the bowling department",
            "img":Axar
        },
        7:{
            "subject": "Md Shami",
            "description": "A pace powerhouse, unleashing thunderbolts with precision. With a steely resolve and skillful swing, he stands tall as a key pillar in India's fast-bowling arsenal",
            "img":Mdshami
        },
        8:{
            "subject": "J Bumrah",
            "description": "The master of yorkers, a pacer with an unorthodox yet lethal style. His ability to bring chaos to opposition ranks is a testament to his skill and unmatched bowling prowess",
            "img":JBumrah
        },
        9:{
            "subject": "R Ashwin",
            "description": "The spin sorcerer, artfully weaving spells with his guile and intelligence. A true maestro of the spin department, leaving a lasting imprint on the cricketing canvas",
            "img":Ashwin
        },
        10:{
            "subject": "Kl Rahul",
            "description": "A stylish batsman with a flair for elegance, crafting innings with finesse. His versatility and grace make him a key asset in the cricketing arena",
            "img":KlRahul
        }
    }

    return (
        <BlogPostsContext.Provider value={Blogs}>
            {children}
        </BlogPostsContext.Provider>
    )
}

export default BlogPosts;
export { BlogPostsContext };
