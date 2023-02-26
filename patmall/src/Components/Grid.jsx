import { SimpleGrid,Box, Image,Text, Center } from '@chakra-ui/react'
import React from 'react'

const Grid = () => {

const data=[
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498530/1610537092744.png?imwidth=140&amp;impolicy=hq",
     "title": "Iconic"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498114/1610537113386.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Raymonds"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710421/1610543158966.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Planet Fashion"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498105/1610535869042.png?imwidth=140&amp;impolicy=hq",
     "title": "109 F"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498118/1610535851387.png?imwidth=140&amp;impolicy=hq",
     "title": "Aurelia"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994265/1643711263391.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Manyavar"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994279/1643712364578.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Spykar"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994288/1643713188868.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Zivame"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994348/1643715968772.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Disrupt"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710342/1620736738312.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Central"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498074/1613028372599.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Pantaloons"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994845/1643780245028.png?imwidth=140&amp;impolicy=hq",
     "title": "Brand Factory"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498086/1610536486321.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Levi's"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498239/1620736478260.jpg?imwidth=140&amp;impolicy=hq",
     "title": "ONLY"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498254/1610536539307.jpg?imwidth=140&amp;impolicy=hq",
     "title": "UCB"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498081/1583915454539.jpg?imwidth=140&amp;impolicy=hq",
     "title": "BIBA"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994846/1643780303875.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Bewakoof.com"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/498075/1593586492547.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Myntra"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994132/1643692700179.png?imwidth=140&amp;impolicy=hq",
     "title": "V-Mart"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994133/1643692702063.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Westside"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994135/1643692758763.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Jack n Jones"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994137/1643692795789.jpg?imwidth=140&amp;impolicy=hq",
     "title": "fabindia"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994138/1643692870440.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Allen solly"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994847/1643780584196.png?imwidth=140&amp;impolicy=hq",
     "title": "fbb"
    },
   
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/994852/1643780584093.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Jockey"
    },
    
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995524/1643867277967.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Bata"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995525/1643867496758.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Nike"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995526/1643867362885.png?imwidth=140&amp;impolicy=hq",
     "title": "Puma"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995527/1643867532232.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Khadim's"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995528/1643867625370.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Red Chief"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710655/1643866806024.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Speedo"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995529/1643867506442.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Sports Station"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995530/1643867664954.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Woodland"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710654/1643866837835.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Metro Shoes"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710657/1613028563419.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Mochi"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995531/1643867698366.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Lotto"
    },
   
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995534/1643868084258.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Steve Madden"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/995532/1643867743019.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Regal"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710661/1613028718597.jpg?imwidth=140&amp;impolicy=hq",
     "title": "Call it Spring"
    },
    {
     "image": "https://assetscdn1.paytm.com/images/catalog/view_item/710662/1613028739303.jpg?imwidth=140&amp;impolicy=hq",
     "title": "C &amp; K"
    }
   ]

  return (
   
        <SimpleGrid columns={[5,7,10]} spacing={10} mt={10}>
            {data.map((i)=>(
                <Center>
                    <Box>
                    <Image m={'auto'} src={i.image} borderRadius={'50%'} w={"80%"}/>
                   <Center><Text fontSize={"10px"} >{i.title}</Text></Center> 
                </Box>
                </Center>
                
            ))}
        </SimpleGrid>
   
  )
}

export default Grid