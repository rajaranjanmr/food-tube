import { v4 as uuid } from "uuid";
import biryaniimg from "../../assets/images/biryaniimg.jpeg"
import thaliimg from "../../assets/images/thalis.jpeg"
import chineseimg from "../../assets/images/chowimage.jpeg"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "south",
    description:"south indian food",
    title:"Biryanis",
    image:biryaniimg,
    categoryToBeShown:"food based"
    },
  {
    _id: uuid(),
    categoryName: "north",
    description:"north indian food" ,
    title:"Thalis",
    image:thaliimg,
    categoryToBeShown:"food based",
    
  },
  {
    _id: uuid(),
    categoryName:"east",
    description:"east indian food",
    title:"Chinese",
    image:chineseimg,
    categoryToBeShown:"food based"
  },
];
