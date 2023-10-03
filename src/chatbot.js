import { Text, View , ScrollView} from "react-native";
import { Button,IconButton, TextInput,Modal,Portal,Card, Surface} from "react-native-paper";
import { useEffect, useState } from "react";

const Chatbot = () => {
    const [chats,setChats]=useState({})
    const [prevchat,setPrevChat]=useState(["What can I help you with?"])
    const [stack,setStack]=useState([]) 
    const reply={
        "response":"What can I help you with?",
        "Themes" : {
            "response":"Which theme would you like to pick?",
            "Bollywood":{
                "response" : "A Bollywood theme party is a vibrant and colorful event inspired by the glitz and glamour of the Indian film industry, Bollywood. Here are some ideas to help you plan a memorable Bollywood-themed party:",
            "Invitations":{"response" : "- Design invitations that resemble Bollywood movie posters or use images of famous Bollywood actors and actresses.\n- Use bright and bold colors like red, gold, and purple to create an eye-catching invitation."},

            "Decorations":{"response" : "- Create a red carpet entrance with faux paparazzi for a grand Bollywood arrival.\n- Decorate the venue with Bollywood movie posters, film reels, and colorful drapes.Use vibrant fabrics like silk and satin for tablecloths and chair covers.\n- Hang strings of fairy lights and lanterns to create a festive atmosphere."},

            "Dress Code":{"response" : "- Encourage guests to dress up in Bollywood-inspired attire.\n- Sari, kurta-pajama, lehenga-choli, or even tuxedos and evening gowns are great choices.\n- Provide bindis, bangles, and turbans as party favors for guests to wear."},

            "Music & Dance":{"response" : "- Create a playlist of popular Bollywood songs to set the mood.\n- Include both classic and contemporary hits.\n- Hire a Bollywood dance instructor or performer to give dance lessons or put on a performance.\n- Organize a dance competition for guests to show off their Bollywood dance moves."},

            "Food & Drinks":{"response" : "- Serve a variety of Indian dishes like samosas, pakoras, chicken tikka, and biryani.\n-  Offer a selection of Indian desserts like gulab jamun, jalebi, and kheer.\n- Set up a bar with Indian-inspired cocktails like mango lassi and chai martinis"},

            "Entertainment":{"response" : "- Screen a Bollywood movie or create a movie marathon with a selection of your favorite Bollywood films.\n- Organize Bollywood trivia or karaoke with popular Bollywood songs.\n- Consider hiring henna artists or tarot card readers for added entertainment."},

            "Photo Booth":{"response" : "- Set up a photo booth with Bollywood-themed props like movie clapperboards, oversized sunglasses, and feather boas.\n- Encourage guests to take photos and share them on social media with a unique hashtag."},

            "Favors & Prizes":{"response" : "- Give out Bollywood-themed party favors like movie DVDs, posters, or small trinkets.\n- Award prizes for the best-dressed guests or the winners of dance and trivia competitions."},

            "Games & Activities":{"response" : "- Organize Bollywood-themed games like a dance-off, a talent show, or a Guess the Bollywood Movie quiz.Have a Bollywood movie trivia quiz with prizes for the winners."},

            "Cake & Dessert":{"response" : "- Order or bake a Bollywood-themed cake with movie reel decorations or a design inspired by a favorite Bollywood film. "},
            },


            "Colour coordinated":{
                "response" : "A color coordination theme party is a fun and visually appealing way to celebrate a special occasion. The idea is to choose a specific color or color scheme, and everything from decorations to attire to food and drinks follows that theme. Here are some steps to plan a color coordination theme party:",   

            "Choose a Color Scheme:":{"response" : "- Select a primary color or color combination as the theme for your party.This color will set the tone for everything else."},

            "Invitations":{"response" : "-Design invitations that reflect the chosen color or color scheme. You can use colored paper, ribbons, or graphics that match the theme."},

            "Decorations":{"response" : "-Decorate the venue with items in the chosen color or colors. Consider:\n-Balloons and streamers.\n- Tablecloths, napkins, and chair covers. \n- Flowers and centerpieces. \n- Banners and signage.\n- You can also use variations of the chosen color(s) to create depth and contrast in the decorations."},

            "Dress Code:":{"response" : "- Specify the dress code for your guests based on the chosen colors. Encourage everyone to wear clothing that fits the theme.\n- Provide guidelines on what shades of the color(s) are acceptable to ensure uniformity."},

            "Food & Drinks":{"response" : "- Work with a caterer or prepare dishes and drinks that match the color scheme. For example, if you choose a blue theme, you can serve blueberry cocktails and blue frosted cupcakes.\n- Consider adding edible food coloring to some dishes to match the theme.\n- You can ask your guests to bring food of the mentions colour For example: If yellow is the theme, guests can bring yellow lays, maggi , frooti, monaco biscuit, Minies, Yellow kurkure etc."},

            "Music and Lighting:":{"response" : "- Adjust the lighting to complement the color scheme. Colored LED lights or gels on existing fixtures can create a stunning effect. "},

            "Activities and Games:":{"response" : "- Incorporate color-themed games or activities, such as a color scavenger hunt where guests must find and collect items of the chosen color.\n- Consider a costume contest for the best-dressed guest in the theme color(s). "},

            "Favors and Decorative Elements:":{"response" : "- Provide guests with party favors that match the theme. These could be small items like colored candles, keychains, or candies./n- Use colored plates, utensils, and glassware that fit the theme. "},

            "Cake and Dessert:":{"response" : "- Order or bake a cake that follows the color scheme. You can also offer colored desserts like macarons or cupcakes. "},

            "Prizes and Awards:":{"response" : "- Consider giving out prizes for the best-dressed guest, the most creative use of the theme color, or the winner of color-themed games."},
         
            },

            "TV-Shows":{
                "response" : "Centered around a particular TV show or series that you and your guests are fans of. The idea is to immerse yourselves in the world of that show, incorporating elements from the series into the party decorations, activities, and even costumes. Here are steps to plan a show-specific theme party:",

            "Choose the Show":{"response" : "- Select a TV show that you and your guests love and are familiar with. It could be a classic like Friends, a popular series like Game of Thrones, or a cult favorite like Stranger Things."},

            "Invitations":{"response" : "- Design invitations that feature graphics, characters, or iconic symbols from the chosen TV show.\n- Use quotes or catchphrases from the show to set the tone."},

            "Decorations":{"response" : "- Transform your party space to resemble a location from the TV show.\nFor example: For a Friends theme, recreate Central Perk with a coffee bar and comfy couches.\n- For a Game of Thrones theme, use medieval-inspired decorations like banners and swords.\n- For a Stranger Things theme, recreate the Upside Down with dark and eerie decor."},

            "Dress Code":{"response" : "- Specify a dress code that encourages guests to come dressed as characters from the show. Provide costume ideas for those who might need inspiration."},

            "Music & Entertainment":{"response" : "- Set the mood with music from the show's soundtrack or songs that are referenced in the series.\n- Organize trivia games or activities related to the show, such as Game of Thrones trivia or a Stranger Things demogorgon hunt."},

            "Food & Drinks":{"response" : "- Create a menu that features dishes and drinks inspired by the show. For example: Friends could have coffee and a variety of sandwiches and pastries.Game of Thrones might feature a medieval feast with hearty stews and meats.\nStranger Things could have Eggo waffles and themed cocktails."},

            "Photo Booth":{"response" : "- Set up a photo booth with props and backdrops related to the show.\n- Encourage guests to take pictures in character."},

            "Favors & Decorative Elements":{"response" : "- Provide guests with show-themed party favors, such as mini posters, keychains, or character masks.\n- Use show-specific tableware and decorations to enhance the theme."},

            "Games & Activities":{"response" : "- Plan activities and games that are based on the show's themes or storylines. For instance: A Friends party could have a Ross and Rachel trivia game or a How you doin'? contest.\nA Game of Thrones party might feature a Who Will Sit on the Iron Throne? prediction game.\nA Stranger Things party could include a scavenger hunt for Eleven's favorite snacks like Eggo waffles and Coca-Cola."},

            "Prizes & Awards":{"response" : "- Give out prizes or awards for the best costume, the winner of trivia games, or the most creative interpretation of the show's theme."},

            "Screening or Episodes":{"response" : "-Consider screening a few episodes or memorable scenes from the show during the party, especially if it's a longer series."},
             },


            "Retro":{
                "response" : "-A retro theme party is a fantastic way to transport your guests back in time to a specific era or decade known for its distinctive fashion, music, and culture. Here's how to plan a retro theme party: \n- Choose a Decade: Select a specific era or decade as your theme. Popular choices include the 1950s, 1960s, 1970s, 1980s, and 1990s. Each era has its unique style, so pick the one that resonates with you and your guests:",
   
               "Invitations":{"response" : "-Design invitations that capture the essence of the chosen decade.\n- Use fonts, colors, and graphics that were popular during that time. \n- Incorporate phrases or slogans associated with the era."},
   
               "Decorations":{"response" : "- Transform your party space to reflect the era's style. Consider the following ideas: \n- For a 1950s party, use checkered tablecloths, soda shop props, and vintage posters. \n- For a 1960s party, go for psychedelic colors, lava lamps, and flower power decorations. \n- For a 1970s party, use disco balls, shag carpeting, and colorful beaded curtains. \n- For an 1980s party, incorporate neon colors, cassette tapes, and Rubik's Cubes. \n- For a 1990s party, use posters of '90s icons, Tamagotchis, and boomboxes."},
   
               "Dress Code":{"response" : "- Specify the dress code based on the chosen decade. Encourage guests to come dressed in attire that was popular during that time.\n- Offer costume ideas for those who might need guidance."},
   
               "Music":{"response" : "- Create a playlist featuring hit songs from the era you're celebrating. Include a mix of genres and artists that define the time.\n -Consider hiring a DJ who specializes in music from that decade to keep the dance floor hopping."},
   
               "Food & Drinks":{"response" : "-Serve food and drinks that were popular during the era. For example:\n- A 1950s party could have milkshakes, burgers, and fries. \n- A 1980s party might feature classic '80s snacks like Pop Rocks and Tang. \n- A 1990s party could serve pizza rolls, Fruit by the Foot, and Capri Sun."},
   
               "Activities and Games":{"response" : "- Plan games or activities that were popular during the chosen era. For example: \n- Organize a dance-off with moves from the era. \n- Set up a trivia game about historical events or pop culture from that decade."},
   
               "Favors and Decorative Elements":{"response" : "- Provide guests with retro-themed party favors such as vinyl records, retro toys, or vintage-style sunglasses.\n- Use era-appropriate tableware and decorations to enhance the theme."},
   
               "Photo Booth":{"response" : "-Set up a photo booth with props and backdrops that represent the era. Encourage guests to take photos and share them on social media with a custom hashtag."},
   
               "Cake and Dessert":{"response" : "- Order or bake a cake with a design that reflects the era, such as a cassette tape or disco ball.\n- Offer desserts that were popular during that time, like fondue or gelatin molds."},
   
               "Prizes and Awards":{"response" : "- Give out prizes or awards for the best costume, the best dance moves, or the winner of era-related games."},
           
             },
   

             "Glow in the dark ":{
                "response" : "-A Glow in the Dark theme party is a fun and visually stunning way to create an exciting and memorable atmosphere for your guests. Here's how to plan and organize a Glow in the Dark theme party:",
   
               "Invitations":{"response" : "-Design invitations that feature fluorescent or neon colors, glow-in-the-dark fonts, and graphics that hint at the theme."},
   
               "Venue and Decorations":{"response" : "- Choose a dark or dimly lit venue where the glow elements will be most effective. \n- Decorate the space with black lights (UV lights) to make fluorescent and neon colors pop. \n- Hang glow-in-the-dark balloons, streamers, and banners. \n- Place glow sticks or neon LED lights around the room for added illumination. \n- Create a neon sign with the party's name or a welcome message."},
   
               "Dress Code":{"response" : "- Encourage guests to wear white or neon-colored clothing, which will glow under the black lights. \n- Provide guests with glow-in-the-dark accessories like bracelets, necklaces, and sunglasses."},
   
               "Glow-in-the-Dark Paint and Decor ":{"response" : "- Create a glow-in-the-dark mural or backdrop for photos. \n- Use glow-in-the-dark paint to create designs or patterns on walls and furniture. \n- Scatter neon-colored or glow-in-the-dark confetti on tables and surfaces."},
   
               "Food & Drinks":{"response" : "-Serve foods that are naturally fluorescent, like highlighter-colored Jell-O shots, neon cupcakes, or colorful fruit platters. \n- Create a neon-themed cocktail bar with fluorescent-colored drinks. \n- Include tonic water, which glows under black lights due to quinine. \n- Use glow sticks as drink stirrers or cocktail garnishes."},
   
               "Music and Entertainment":{"response" : "- Create a playlist with upbeat and danceable music to keep the energy high. \n- Hire a DJ or a live band that can perform under black lights with neon or fluorescent costumes. \n- Set up a dance floor with neon tape or paint to enhance the glow effect."},
   
               "Activities and Games":{"response" : "- Organize glow-in-the-dark games like glow-in-the-dark bowling, glow-in-the-dark ring toss, or glow-in-the-dark twister. \n- Provide guests with neon-colored face paint and body paint for creative designs. \n- Host a neon-themed karaoke session or a dance-off."},
   
               "Favors and Accessories":{"response" : "-Prepare glow-in-the-dark party favors such as glow sticks, glow bracelets, and glow necklaces. \n- Offer guests neon-colored sunglasses or glow-in-the-dark hats."},
   
               "Photo Booth":{"response" : "-Set up a photo booth with a black backdrop, neon props, and UV lighting to capture stunning glow-in-the-dark photos. \n- Encourage guests to share their photos on social media with a unique hashtag."},
   
               "Cake and Dessert":{"response" : "- Order or bake a cake with fluorescent or glow-in-the-dark frosting. \n- Offer desserts that glow under black lights, like neon-colored cotton candy or cupcakes with glow-in-the-dark icing."},
   
                 "Safety Precautions":{"response" : "- Ensure that the venue has proper ventilation, especially if using black lights for an extended period. \n- Advise guests to wear appropriate eye protection, like UV-blocking sunglasses, to avoid prolonged exposure to black lights."},
             },
   

            
            "Traditional":{
                "response" : "-A traditional Indian theme party allows you to celebrate and immerse yourself in the rich customs, culture, and festivities of India. A traditional theme party allows you to celebrate and appreciate the rich diversity of cultures and traditions from around the world. With the right decorations, cuisine, and entertainment, you can create an immersive and enjoyable experience that honors the chosen tradition. Here are steps to plan a traditional Indian theme party:",
   
            "Choose a Theme":{"response" : "-   Decide on the specific Indian tradition or culture you want to celebrate. India is incredibly diverse, so you can choose from themes like Bollywood, Diwali, Holi, Rajasthani, Punjabi, or South Indian."},
   
            "Invitations":{"response" : "-    Design invitations that reflect the chosen Indian theme. Incorporate vibrant colors, intricate patterns, and Indian motifs to set the tone."},
   
            "Venue and Decorations":{"response" : "-  Select a venue that complements the Indian theme, or transform your space with Indian-inspired decor.\n- Use colorful drapes, tapestries, and cushions to create a vibrant atmosphere. \n- Decorate with traditional Indian items like diyas (clay lamps), rangoli designs, and Indian artwork. \n- Hang Indian flags, banners, or traditional fabrics to enhance the ambiance."},
   
            "Dress Code":{"response" : "-   Specify the dress code as traditional Indian attire. Encourage guests to wear sarees, kurta-pajamas, or sherwanis. Provide guidelines or suggestions for attire if needed."},
   
            "Food & Drinks":{"response" : "-Serve a sumptuous feast of Indian cuisine that represents various regions of India. Consider dishes like biryani, samosas, butter chicken, dosas, or chaat.\n- Set up a chaat station with different chaat varieties.\n- Offer traditional Indian beverages like masala chai, lassi, and thandai. \n- Include Indian sweets like gulab jamun, jalebi, and rasgulla for dessert."},
   
            "Music and Entertainment":{"response" : "-  Create a playlist featuring a mix of Bollywood songs, classical Indian music, and folk tunes. \n- Consider hiring traditional Indian musicians or dancers to perform.\n- Arrange a Bollywood dance performance or a classical Kathak dance demonstration. \n- Provide dhol (drum) players for a lively entrance or performances."},
   
            "Activities and Games":{"response" : "-   Organize traditional Indian games and activities:\n- Mehndi (henna) application for guests.\n- Dandiya or Garba dance for a festive atmosphere. \n- Diya painting or Rangoli design competition.\n- Bollywood dance-off or Karaoke with Hindi songs."},
   
            "Favors and Decorative Elements":{"response" : "- Provide guests with Indian-themed party favors, such as bangles, bindis, or miniature idols of deities.\n- Incorporate elements like marigold flower strings and elephant figurines into your decor."},
   
            "Photo Booth":{"response" : "-Set up a photo booth with Indian-themed props like turbans, Bollywood-style sunglasses, and traditional attire.Encourage guests to take photos and share them using a custom hashtag."},
   
            "Cake and Dessert":{"response" : "-  Order or bake a cake with an Indian design or a topper related to the chosen theme.\n- Offer traditional Indian sweets like barfi, motichoor ladoo, or kaju katli."},
   
            "Prizes and Awards":{"response" : "-  Consider giving out prizes for the best traditional attire, the most impressive henna design, or the most enthusiastic dance performance."},
   
            "Educational Component":{"response" : "- Include an educational component to help guests learn about Indian traditions, customs, and history. Display informative boards or hire cultural experts to share insights.\n- By incorporating these elements, your traditional Indian theme party will be a vibrant celebration of India's rich culture and heritage."},
   
            },


            "Fancy":{
                "response" : "-A fancy theme party is an opportunity for guests to dress up elegantly and enjoy a sophisticated and upscale atmosphere. A fancy theme party provides an opportunity for guests to indulge in sophistication and glamor. With meticulous attention to detail and a focus on luxury, you can create an unforgettable and elegant experience that transports everyone to a world of opulence and style. Whether it's a black-tie affair or a more specific theme like a masquerade ball or a Great Gatsby-inspired soiree, here's how to plan a fancy theme party:",
   
            "Choose a Fancy Theme":{"response" : "- Decide on the specific theme for your fancy party. Popular options include:.\n- Black-tie gala.\n- Masquerade ball.\n- Hollywood red carpet.\n- Great Gatsby/Roaring Twenties.\n- James Bond/spy theme.\n- Vintage Hollywood glamor.\n- Classic Hollywood movie night.\n- Royal or Victorian elegance"},
   
            "Invitations":{"response" : "- Design elegant invitations that reflect the chosen theme. Use formal fonts, luxurious paper, and embellishments like ribbons or wax seals for added sophistication."},
   
            "Venue and Decorations":{"response" : "-Choose a venue that suits the theme, such as a historic mansion, upscale ballroom, or elegant garden.\n- Decorate with opulent and glamorous elements, including chandeliers, candles, silk drapes, and gold accents.\n- Use rich and luxurious colors like black, gold, silver, and deep red for a classic and upscale ambiance."},
   
            "Dress Code":{"response" : "-Specify a formal dress code on the invitations. Encourage guests to wear formal attire or costumes that match the chosen theme.\n- Provide guidelines for what constitutes black tie or other dress code specifics."},
   
            "Food & Drinks":{"response" : "-Plan a gourmet menu that includes upscale dishes and appetizers. Consider hiring a catering service to ensure high-quality cuisine.\n- Set up a sophisticated bar with premium liquors and champagne. \n- Serve elegant desserts like petit fours, chocolate truffles, and macarons."},
   
            "Music and Entertainment":{"response" : "-Arrange for live music, such as a jazz band, string quartet, or pianist, to create a classy atmosphere. \n- Hire a professional DJ to play a mix of classic and modern tunes, depending on the theme. \n- Consider hiring professional dancers or entertainers that fit the theme, such as ballroom dancers or magicians."},
   
            "Activities and Games":{"response" : "-Organize casino games like blackjack, poker, or roulette tables for a James Bond or Great Gatsby theme.\n- Host a dance-off or a ballroom dance lesson for guests who want to showcase their fancy footwork."},
   
            "Favors and Decorative Elements":{"response" : "-Provide guests with elegant party favors, such as personalized wine glasses, engraved keychains, or scented candles. \n- Use fine china, crystal glassware, and silverware for the dining and drink settings."},
   
            "Photo Booth":{"response" : "-Set up a photo booth with a luxurious backdrop, elegant props, and a professional photographer or a high-quality camera setup.\n- Create a custom photo frame or backdrop with the party's name and theme."},
   
            "Cake and Dessert":{"response" : "-Order or bake an extravagant and beautifully decorated cake that matches the theme.\n- Offer a dessert bar with a selection of decadent treats and pastries."},
   
            "Prizes and Awards":{"response" : "-Consider giving out prizes or awards for the best-dressed guests, the winners of casino games, or the best dancer."},
   
            "Party Atmosphere":{"response" : "-Ensure that the ambiance is elegant and refined, with dimmed lighting, soft music, and attentive service."},
   
             },
   


             " Superheros ":{
                "response" : "-A superheroes theme party is a fantastic way to celebrate the world of comic books and movies while allowing guests to embrace their inner heroes or villains. A superheroes theme party is a fun and action-packed way to celebrate with friends and family. By incorporating elements from the comic book world and encouraging guests to embrace their favorite characters, you can create a memorable and super-powered event. Here's how to plan a superheroes theme party:",
   
            "Choose the Superheroes Theme":{"response" : "- Decide if you want a general superheroes theme where guests can come as any hero or villain or if you want to focus on a specific comic book universe like Marvel, DC, or a particular superhero team like the Avengers or Justice League."},
   
            "Invitations":{"response" : "- Create invitations that feature iconic superhero logos, comic book-style graphics, or images of the chosen superheroes. Make sure to include the dress code and any specific costume requirements."},
   
            "Venue and Decorations":{"response" : "- Choose a venue or transform your home into a superhero headquarters or a scene from a comic book.\n- Decorate with superhero-themed decorations such as banners, posters, and life-sized cutouts of superheroes.\n- Use color schemes associated with the chosen comic book universe (e.g., red and blue for Superman, red and black for Spider-Man, etc.)."},
   
            "Dress Code":{"response" : "- Encourage guests to come dressed as their favorite superheroes or villains. Provide costume ideas for those who might need inspiration.\n- Consider organizing a costume contest with prizes for the best-dressed hero and villain."},
   
            "Food & Drinks":{"response" : "- Create a menu that includes superhero-themed food and drinks. For example:\n- Serve Hulk-sized burgers, Thor's Hammer meat skewers, or Spider-Man's Web Pizza.\n- Offer superhero-themed cocktails and mocktails, such as a Batman Black & White cocktail or a Wonder Woman's Lasso Lemonade."},
   
            "Music and Entertainment":{"response" : "- Compile a playlist featuring superhero movie soundtracks and theme songs.\n- Consider hiring a DJ who can mix in superhero music and play tracks that fit the theme.\n- Organize a movie marathon featuring superhero films or episodes of superhero TV series."},
   
            "Activities and Games":{"response" : "- Plan superhero-themed games and activities, such as a Superhero Trivia quiz, a scavenger hunt for hidden Infinity Stones (Marvel) or Lantern Rings (DC), or a Superhero Obstacle Course."},
   
            "Favors and Decorative Elements":{"response" : "- Provide guests with superhero-themed party favors like action figures, masks, or keychains.\n- Use superhero-themed tableware and decorations to enhance the theme."},
   
            "Photo Booth":{"response" : "- Set up a photo booth with backdrops, props, and signage related to the superheroes theme. Encourage guests to take photos in their costumes."},
   
            "Cake and Dessert":{"response" : "- Order or bake a superhero-themed cake with a design that features the chosen hero or logo. \n- Offer desserts with edible images of superheroes or villains."},
   
            "Prizes and Awards":{"response" : "- Give out prizes for the best costumes, the winners of trivia games, or the champions of superhero-themed contests."},
   
            "Safety and Guidelines":{"response" : "- Make sure any props or weapons as part of costumes are safe and that no one is put in a dangerous situation.\n- Set some ground rules for any heroic actions to ensure everyone's safety and enjoyment."},
   
             },
   

            
            " Casual ":{
                "response" : "-A casual theme party allows you and your guests to relax, have fun, and enjoy a laid-back atmosphere. A casual theme party is all about embracing a relaxed atmosphere and enjoying the company of friends and family in a comfortable and informal setting. By selecting a theme that promotes a carefree vibe, you can create a stress-free and enjoyable event for everyone.The key is to choose a theme that promotes a carefree and informal vibe. Here's how to plan a casual theme party:",
   
            "Choose a Casual Theme":{"response" : "-Select a theme that encourages comfort and a relaxed dress code. Some ideas include:.\n- Beach party.\n- Picnic in the park.\n- BBQ or cookout.\n- Movie night under the stars.\n- Retro casual (e.g., '80s or '90s nostalgia).\n- Sports fan gathering.\n- Camping or bonfire party."},
   
            "Invitations":{"response" : "- Design invitations that reflect the chosen theme. Use relaxed fonts and graphics that set the casual tone.\n- Include details about the dress code and any specific items guests should bring, such as beach towels or camping gear."},
   
            "Venue and Decorations":{"response" : "-Choose a suitable venue for the theme, whether it's a beach, a park, your backyard, or a cozy indoor space.\n- Decorate according to the theme with appropriate items like beach umbrellas, picnic blankets, or sports memorabilia.\n- Use natural elements like flowers, greenery, or beach shells for a laid-back vibe."},
   
            "Dress Code":{"response" : "-Encourage guests to wear comfortable and casual attire that matches the theme. For example:\n- Swimsuits and flip-flops for a beach party.\n- T-shirts and jeans for a retro casual theme.\n- Sports jerseys for a sports fan gathering.\n- Hawaiian shirts and leis for a luau.\n- Comfortable outdoor clothing for camping or bonfire parties"},
   
            "Food & Drinks":{"response" : "-Plan a menu that suits the theme and venue. For example:\n- Beach party: Grilled seafood, fruit salad, and tropical drinks.\n- Picnic: Sandwiches, salads, and refreshing lemonade.\n- BBQ or cookout: Burgers, hot dogs, and classic barbecue sides.\n- Movie night: Popcorn, nachos, and a variety of movie snacks.\n- Luau: Hawaiian dishes like pineapple chicken and poi, along with tropical cocktails."},
   
            "Music and Entertainment":{"response" : "-Create a playlist with laid-back and easygoing tunes that match the casual theme.\n- Offer simple entertainment options like frisbee, beach volleyball, board games, or a movie screening for movie night parties."},
   
            "Activities and Games":{"response" : "-Organize relaxed games and activities that suit the theme. For example:\n- Beach party: Sandcastle building contest or beach volleyball.\n- Picnic: Blanket bingo or a sack race.\n- Luau: Limbo contest or hula dancing.\n- Camping: Campfire storytelling or stargazing."},
   
            "Favors and Decorative Elements":{"response" : "Provide guests with casual-themed party favors like sunglasses, picnic blankets, or beach balls. \n- Use disposable tableware and decorations to keep the atmosphere relaxed and easygoing."},
   
            "Photo Booth":{"response" : "-Set up a photo booth with props and backdrops related to the theme. Encourage guests to take casual and fun photos."},
   
            "Cake and Dessert":{"response" : "-Offer simple and casual desserts like ice cream sundaes, s'mores for camping parties, or tropical fruit platters for luau themes."},
   
            "Prizes and Awards ":{"response" : "-Consider giving out prizes for casual games and contests, such as a best sandcastle award for beach parties or a movie trivia quiz for movie nights."},
   
            },
        },

        "Gifts" :{
            "response":"For whom do you want to pick a gift for?",
            "Kids":{
                "response" : "- Soft plush toys: Stuffed animals or soft, cuddly toys are comforting for babies.\n- Baby books: High-contrast board books or touch-and-feel books are great for sensory development.\n- Musical mobile: A colorful mobile that plays soothing music can be hung above the crib.\n- Building blocks: Large, colorful building blocks encourage creativity and fine motor skills.\n- Ride-on toys: Mini scooters, tricycles, or push cars are fun for physical activity.\n- Art supplies: Non-toxic crayons, washable markers, and finger paints for creative expression.\n- Puzzles: Age-appropriate puzzles help with problem-solving and fine motor skills.\n- Dress-up costumes: Costumes for imaginative play and role-playing.\n- Outdoor toys: Bikes, swing sets, or sports equipment for active play."
            },

            "Teens":{
                "response" : "- Electronics: Headphones, smartphones, or tablets (if appropriate for their age).\n- Fashion items: Clothing, accessories, or gift cards to their favorite stores.\n- Hobby-related gifts: Musical instruments, art supplies, or sports equipment.\n- Experiences: Tickets to concerts, movies, or a favorite sports event.\n- Science kits: Chemistry sets, telescopes, or microscopes for hands-on learning.\n- Educational apps or online courses: Subscriptions to educational platforms like Khan Academy or Duolingo.\n- Globe or world map: Encourage their curiosity about the world.\n- Educational books: Non-fiction books that align with their interests or school subjects.\n- Personalized name puzzles or storybooks.\n- Customized clothing or accessories with their name or favorite character.\n- Personalized wall art or room decor."
            },

            "Adults":{
                "response" : "- Customized jewelry with their name or initials.\n- Personalized photo albums or picture frames.\n- Monogrammed towels, robes, or home decor items.\n- Wireless headphones or earbuds.\n- Smart speakers like Amazon Echo or Google Home.\n- Fitness trackers or smartwatches.\n- Bestsellers or books by their favorite author.\n- A subscription to a book club or audiobook service.\n- A beautiful journal or notebook for writing.\n- Gourmet food and wine baskets.\n- A subscription to a coffee or tea club.\n- Cooking classes or a high-quality cooking gadget.A spa day or massage gift certificate.\n- Aromatherapy diffusers with essential oils.\n- Yoga or meditation accessories.Art prints or wall decor that matches their style.\n- Cozy blankets or throw pillows.\n- Indoor plants or succulents.Craft supplies or kits for their favorite hobby.\n- Musical instruments or lessons.\n- Outdoor gear for camping, hiking, or biking.Streaming services like Netflix, Hulu, or Disney+.\n- Magazine subscriptions.\n- Monthly subscription boxes tailored to their interests (e.g., beauty, wine, gourmet food).Tickets to a concert, theater show, or sports event.\n- Cooking classes or wine tastings.\n- Hot air balloon rides or other adventurous experiences.\n- You can also gift electronic devices, clothes , and house accessories."
            },


        },

        "Entertainment" : {
            "response" : "Choose a mode of Entertainment for you event",
        "DJ":{
            "response" : "Get the dance floor grooving with a DJ spinning your favorite beats"
        }, 
        "Live Music & Karaoke":{
            "response" : "Experience the magic of live music that sets the mood right or unleash the inner rock star and sing your heart out"
        }, 
        "Performaces & Dance-Offs":{
            "response" : "Enjoy captivating performances that will leave you in awe or arrange dance-offs, where rhythm and style collide on the dance floor"
        },       
        "Comedy Show":{
            "response" : "Arrange stand-up Comedy shows which are liked by the audience. Invite famous stand-up comedians to light-up everybody's mood"
        }, 
        "Magic Shows":{
            "response" : "Magic is the one thing that always leaves you in complete awe be even if you belong to any age group so get mesmerized by mind-bending illusions and tricks by arranging a magic show"
        }, 
        "Story Sharing":{
            "response" : "Connect through the art of storytelling and share memorable tales."
        },       
        },

        "Games" : {
            "response" : "Liven up your event by organizing fun games",
        "Musical Chairs":{"response" : "A thrilling game of musical chairs where participants jostle for seats to the rhythm, creating moments of suspense and laughter."},
        "Trivia":{"response" : "Test your knowledge with brain-teasing trivia questions, a fun way to challenge your wits and learn something new."},
        "Video Games":{"response" : "Dive into the virtual world of gaming with interactive video game sessions, perfect for gamers of all ages."},
        "Drawing Competition":{"response" : "Unleash your creativity in a lively drawing competition, where imagination knows no bounds."},
        "Dumb Charades":{"response" : "Non-stop entertainment as players act out movie titles and phrases without saying a word, leading to hilariously animated guessing."},
        "Antakshari":{"response" : "Sing your heart out in the classic Indian musical game, where participants take turns singing songs that begin with the last letter of the previous one."},
        "Housie":{"response" : "Enjoy the thrill of a traditional game of Housie (Bingo) with friends and family, hoping to be the first to call out Housie!"},
        "Board Games":{"response" : "Delve into strategic fun with a variety of board games, perfect for a relaxed yet engaging gathering."},
        "Pictionary":{"response" : "A fast-paced drawing and guessing game where creativity meets competition in a race against the clock."},

            
        },

        "Color Combinations" :{
            "response" : "Choose a color combination for your event",
        "Fiesta Color Combination":{"response" : "Vibrant and bold colors like red, orange, yellow, and green evoke the lively spirit of a fiesta or Mexican-themed party."},
        "Tropical Color Combination":{"response" : "Use a mix of bright, exotic colors like turquoise, coral, lime green, and hot pink to create a tropical or luau party atmosphere."},
        "Black & Gold Color Combination":{"response" : "A classic and elegant choice for formal events or glamorous parties. Black and gold exude sophistication and luxury."},
        "Pastel Color Combination":{"response" : "Soft and delicate pastel shades like blush pink, mint green, lavender, and baby blue create a gentle and charming ambiance, ideal for baby showers or springtime gatherings."},
        "Rainbow Color Combination":{"response" : "Incorporate all the colors of the rainbow to create a cheerful and vibrant atmosphere, perfect for children's parties or LGBTQ+ pride events."},
        "Vintage Color Combination":{"response" : "Use muted and retro colors like dusty rose, olive green, and antique gold for a vintage-themed party, such as a 1920s Gatsby party."},
        "Beachy Color Combination":{"response" : "Light and airy colors like aqua blue, sandy beige, and seafoam green capture the essence of a beach or coastal party."},
        "Neon Color Combination":{"response" : "Neon and fluorescent colors like bright pink, electric blue, and neon green create a high-energy, retro, and '80s-inspired party vibe."},
        "Rustic Color Combination":{"response" : "Earthy tones like brown, cream, sage green, and deep red create a rustic and cozy atmosphere, ideal for barn or country-themed parties."},
        "Monochromatic Color Combination":{"response" : "Stick to various shades of a single color to create a cohesive and visually pleasing look. For example, different shades of blue for a Blue Moon party."},
        "Elegant Silver and White Combination:":{"response" : "-Silver and white convey sophistication and elegance. This combination is suitable for upscale and formal events like weddings or galas."},

        },

        "Table Settings" : {
            "response":"Choose table settings for your event",
            "Casual Party Table Setting":{"response" : "- For casual parties, such as backyard BBQs or picnics, a relaxed table setting is appropriate.\n- Use colorful and fun tablecloths or table runners.\n- Place colorful, mismatched plates and utensils at each setting.\n- Opt for mason jar glasses or colorful plastic cups.\n- Use cloth or paper napkins with fun patterns or designs.\n- Consider adding themed or seasonal decorations like floral arrangements, lanterns, or candles."},
            "Buffet or Potluck Party":{"response" : "- For buffet-style parties, set up a buffet table with serving dishes, utensils, and plates.\n- Place utensils, napkins, and disposable plates at the beginning of the buffet line for guests to grab.\n- Provide labels for dishes to help guests identify food options.\n- Use tableware that matches the party theme or color scheme."},
            "Cocktail Party Table Setting":{"response" : "- Cocktail parties often involve standing and mingling, so the focus is on the drink and appetizer stations.\n- Set up small cocktail tables with high-top seating.\n- Use elegant cocktail napkins and provide small plates for appetizers.\n- Arrange appetizers on decorative platters or trays.\n- Place cocktail glasses or wine glasses on a separate drink station."},
            "Formal Dinner Party Table Setting":{"response" : "- Formal dinner parties require more attention to detail in the table setting.\n- Use a formal tablecloth or placemats.\n- Arrange formal china dinner plates with charger plates underneath.\n- Set utensils in the order of use, working from the outside in.\n- Place wine glasses and water glasses to the upper right.\n- Fold cloth napkins neatly and place them on the dinner plates or to the left of the dinner plate.\n- Add elegant centerpieces, such as floral arrangements or candles.\n- Consider name cards or place cards for assigned seating."},
            "Themed Party Table Setting":{"response" : "- For themed parties, adapt the table setting to match the theme. For example:\n- Beach party: Use beach-themed tableware, seashell decorations, and tropical flowers.\n- Vintage tea party: Set up a vintage-style tea table with delicate teacups, saucers, and tiered cake stands.\n- Hawaiian luau: Decorate with tropical leis, tiki torches, and bamboo placemats.\n- Hollywood red carpet: Add gold and black accents, movie-themed centerpieces, and Hollywood star decorations."},
            "Kids' Party Table Setting":{"response" : "- For children's parties, make the table settings colorful and fun.\n- Use themed tableware featuring the child's favorite characters or interests.\n- Provide child-sized utensils and cups.\n- Add colorful balloons, party hats, and other kid-friendly decorations.\n- Consider disposable tableware for easy cleanup."},
            "Seasonal or Holiday Party Table Setting":{"response" : "- Customize the table setting to match the Indian holiday or festive season you're commemorating.\n- For Diwali, incorporate vibrant colors, intricate Rangoli designs, and diyas (lamps) as centerpieces.\n- For Holi, go for a riot of colors with vivid tableware, flower garlands, and playful splashes of color. \n- For Eid, use elegant gold and silver accents, along with ornate serving dishes and traditional motifs. etc"},
        },

        "Decorations" : {
            "response":"Decoation ideas for various events",
            "Birthdays":{"response" : "Balloons: Bouquets, helium-filled, number/letter balloons.\n- Banners and Signs: Happy Birthday banners, name signs, wall decals.\n- Table Decorations: Tablecloths, centerpieces, confetti, placemats.\n- Streamers and Hanging Decorations: Crepe paper streamers, lanterns, garlands.\n- Lighting: String lights, LED candles, tea lights.\n- Themed Decorations: Decorate based on a specific theme.\n- Photo Booth Props: Hats, glasses, masks, backdrop.\n- Cake and Dessert Table Decor: Cake toppers, stands, platters.\n- Personalized Touches: Custom posters, party favors, thank-you cards.\n- Outdoor Decorations: Balloon arches, lawn signs, tents or gazebos"},
            "House Parties":{"response" : "- Balloons: Use colorful balloons as table centerpieces or create balloon garlands.\n- Banners: Hang banners with festive messages or themes.\n- Confetti: Scatter confetti on tabletops or create confetti-filled balloons.\n- DIY photo booth: Create a backdrop with props for fun photo opportunities.\n- Disco ball: Create a dance floor atmosphere with a disco ball.\n- Neon signs: Use neon signs with fun messages or phrases.\n- Wall decals: Decorate walls with removable decals or stickers.\n- Tapestries: Hang decorative tapestries or fabric for added texture.\n- Thematic decor: Choose decor items related to the party's theme or occasion.\n- Fairy lights: Hang fairy lights or twinkle lights for a magical glow.\n- Photo gallery: Create a display of photos from past parties or memorable moments.\n- Costumes and props: Provide costumes and props for guests to dress up.\n- Food and drink displays: Decorate food and drink tables with creative displays.\n- String art: Create unique string art pieces to hang as decor.\n- Repurpose items: Use everyday items creatively as decor.\n- Seasonal decor: Incorporate seasonal or holiday-themed decorations.\n- Plants and flowers: Add potted plants or fresh flowers for a natural touch.\n- Floor cushions: Provide floor cushions or bean bags for comfortable seating.\n- Rustic decor: Use wooden crates, pallets, or burlap for rustic charm.\n- Interactive decor: Incorporate interactive games or elements into the decor.\n- Glowing decor: Use glow-in-the-dark or LED decor for a vibrant look."},
            "Wedding":{"response" : "-Flower arrangements: Centerpieces, bouquets, and aisle decorations.\n- Candlelit ambiance: Use candles, lanterns, or tea lights for a romantic glow.\n- Hanging decor: Paper lanterns, chandeliers, or floral garlands.\n- Table settings: Charger plates, elegant glassware, and fine china.\n- Fabric draping: Elegant fabric can add a touch of luxury to your venue.\n- Fairy lights: String lights can create a magical atmosphere.\n- Mirrors: Mirrored centerpieces or table runners for a reflective effect.\n- Photo display: Create a timeline or gallery of the couple's photos.\n- Ceiling installations: Hang decorative elements from the ceiling.\n- Vintage pieces: Incorporate antique furniture or decor items.\n- Greenery: Decorate with lush greenery, like eucalyptus or ivy.\n- Marquee letters: Giant letters spelling out love, the couple's initials, or wedding-related words.\n- Balloon installations: Create balloon arches, garlands, or balloon bouquets.\n- Geometric decor: Incorporate geometric shapes into your decor elements.\n- Ceremony backdrop: Create a stunning backdrop for the wedding ceremony.\n- Wedding favors: Decorate or personalize wedding favors for guests.\n- Cake table: Highlight the wedding cake with a beautifully decorated table.\n- Lounge areas: Set up comfortable seating areas for guests to relax.\n- Seating chart: Create an artistic or themed seating chart.\n- Dance floor decor: Design the dance floor with patterns or decals.\n- Bar decor: Customize the bar area with signage and garnishes.\n- Outdoor elements: Utilize nature as a backdrop, like trees or a garden."},
            "Corporate Events":{"response" : "-Logo displays: Incorporate the company logo in various decorations.\n- Banners and signage: Use signage for branding and directions.\n- Custom tablecloths: Embroider or print the company's logo on tablecloths.\n- Corporate colors: Incorporate the company's colors in decor elements.\n- Technology displays: Showcase products or innovations with interactive displays.\n- Trade show booths: Design eye-catching booths for exhibitions and conferences.\n- Photo walls: Create a backdrop for photo opportunities with company branding.\n- Awards and recognition: Display awards and achievements prominently.\n- Interactive elements: Incorporate games or interactive displays.\n- Themed decor: Choose a theme related to the event's purpose or industry.\n- Lounge areas: Create comfortable seating for networking and relaxation.\n- Branded promotional items: Give away promotional items as decor.\n- Seating arrangements: Arrange seating in a way that encourages networking.\n- Product showcases: Highlight new products with dedicated displays.\n- Stage design: Create an impressive stage for presentations and speakers.\n- Wall decals: Apply custom decals to walls for branding or messaging.\n- Mobile apps: Use event apps for interactive elements and information.\n- Dynamic displays: Utilize screens and digital signage for real-time updates.\n- Trade show backdrops: Design visually striking backdrops for trade show booths.\n- Themed food and beverage stations: Offer food and drinks that fit the theme.\n- Sustainable decor: Choose eco-friendly and reusable decor options.\n- Ceiling decor: Hang decor elements from the ceiling for a dramatic effect.\n- Minimalist decor: Opt for a sleek and modern look with minimalist decor.\n- Welcome displays: Design welcoming displays at the entrance of the event.\n- Illuminated decor: Use LED lights to add a modern and vibrant touch.\n- Projection screens: Display presentations or visuals on large screens."},
            
        },

    }

    useEffect(()=>{
        setChats(reply)
        
    },[])

    return ( 
        <View style={{
            // padding:30,
            paddingTop: 60,
            backgroundColor:"white",
            height:"100%",
            }}>
        <View style={{
            paddingLeft:30,
            flexDirection:"row" ,
            alignItems:'flex-end',
            marginLeft:-20   
        }}>
        
            <Text style={{
            fontSize:24,
            fontWeight:"700",
            paddingLeft:20
        }}>
            Chatbot
        </Text>
            </View>
            <ScrollView>
            <View style={{
                padding:30,
                
            }}>
            {prevchat.map((c,i)=>(
            <Surface elevation={1}
                key={i}
            style={{
                padding:10,
                borderRadius:5,
                alignSelf:i%2 ? "flex-end" : "flex-start",
                backgroundColor:i%2 ? "#FEF0ED" : "#F8F3F9",
                marginBottom:20,
            }}
            >
                <Text style={{
                    fontSize:16,
                    fontWeight:"700",
                    color:"#402D5B",


                }}>
                {c}
                </Text>
            </Surface>))}
            <View style={{
                width:220,
                gap:10
            }}>
                {Object.keys(chats).filter((c)=>c!="response").map((chat,i)=>(
                  <Card elevation={1}
                  key={i}
                  style={{
                      padding:10,
                      borderRadius:5,
                      alignSelf:"flex-start",
                      width:"100%"
                  }}
                  onPress={()=>{
                    const t=prevchat
                    t.push(chat)
                    t.push(chats[chat].response)
                    console.log(chat)
                    setPrevChat(t)
                    setStack([...stack,chats])
                    setChats(chats[chat])

                  }}
                  >
                      <Text style={{
                          fontSize:16,
                          fontWeight:"700",
                          textAlign:"center",
                          color:"#402D5B",

                      }}>
                      {chat}
                      </Text>
                  </Card>  
                ))}
                {stack.length>0 && (
                    <Card elevation={1}
                    style={{
                        padding:10,
                        borderRadius:5,
                        alignSelf:"flex-start",
                        width:"100%"
                    }}
                    onPress={()=>{
                      const t=prevchat
                      t.push("Back")
                      t.push(reply.response)
                      setPrevChat(t)
                      setChats(stack[stack.length-1])
                      setStack(stack.slice(0,stack.length-1))
                    }}
                    >
                        <Text style={{
                            fontSize:16,
                            fontWeight:"700",
                            textAlign:"center",
                            color:"#402D5B",
  
                        }}>
                        {"Back"}
                        </Text>
                    </Card>  

                )}
                <Card elevation={1}
                  style={{
                      padding:10,
                      borderRadius:5,
                      alignSelf:"flex-start",
                      width:"100%"
                  }}
                  onPress={()=>{
                    const t=prevchat
                    t.push("Reset")
                    t.push(reply.response)
                    setPrevChat(t)
                    setChats(reply)
                    setStack([])
                  }}
                  >
                      <Text style={{
                          fontSize:16,
                          fontWeight:"700",
                          textAlign:"center",
                          color:"#402D5B",

                      }}>
                      {"Reset"}
                      </Text>
                  </Card>  
            </View>

            </View>
            </ScrollView>

     </View>
     );
}
 
export default Chatbot;