\c top_shelf

INSERT INTO type (name) VALUES
('Pilsner'),
('Lager'),
('Märzen'),
('Ale'),
('India Pale Ale');

INSERT INTO beer (name, brewery, type_id, description) VALUES
(
  'Bud Light',
  'Anheuser-Busch',
  1,
  'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavor makes it the worlds favorite light beer.'
),

(
  'Brooklyn Brewery Lager',
  'Brooklyn Brewery',
  1,
  'Consider this the antithesis to all of the super-hopped IPAs you’ll find on this list. Brooklyn’s Vienna-style lager is mellow, subtle, biscuity but not bland. This has more depth than most American lagers you’ll come across—more malty amber than crisp lawnmower beer.'
),
(
  'Sam Adams Oktoberfest',
  'Samual Adams Brewery',
  1,
  'In 1810, the Oktoberfest tradition was born when Munich celebrated the Crown Princes wedding with a special beer and 16-day party. Our version of this classic style blends hearty malts for a deep, smooth flavor with notes of caramel, creating a brew thats perfect for the season, or whatever youre celebrating.'
),
(
  'Old Fezziwig Ale',
  'Samual Adams Brewery',
  1,
  'Spicy & bold, this festive ale is bursting with the flavors of the season. With a full body and spice, itll help those long winter nights pass more quickly. The rich malt character creates notes of sweet toffee, caramel, & roasty chocolate while classic holiday spices like cinnamon, ginger and orange peel dance on the tongue bringing with them the celebratory spirit of the season.'
),
(
  'Boston Lager',
  'Samual Adams Brewery',
  1,
  'Okay, if theres one beer on this list that everyones probably already tried, its Sam Adams Boston Lager. For decades, Boston Lager was essentially your only craft beer option. Picture your standard bar in the ‘80s and early ‘90s with a half dozen taps full of macro crap, then on the end, there’s Sam Adams, offering refuge.'
),
(
  'Palate Wrecker',
  'Green Flash Brewing Co.',
  1,
  'The bottle of this Imperial IPA says, “aggressive,” and for once, the marketing speak is an understatement. Do not trifle with this 9.5%, hop-charged beer. Green Flash recently changed the recipe of some of their flagship beers to be more like Palate Wrecker, and for good reason: once you have a beer like this Imperial IPA, your standard IPA doesn’t quench your thirst anymore.'
),
(
  '90 Minute IPA',
  'Dogfish Head Brewery',
  1,
  'Dogfish Head continuously hops this beer for 90 minutes (thus the name), then throws in some dry hopping to create one beast of an imperial IPA clocking in at 9% and 90 IBUs. But what I truly respect about 90 Minute, is that you can get this beer any time of year, almost all over the country. It’s a big beer, but also an accessible and consistent beer. Not an easy task.'
),
(
  'Abner',
  'Hill Farmstead Brewery',
  1,
  'Another small Vermont brewery here, except instead of a superior IPA, we have a superior double pale ale. Forget the style guidelines, this beer is unfiltered and double dry-hopped. The IBUs are off the charts, so don’t go looking for the balance you’d typically find in a pale ale. Just gear yourself up for an extraordinary hop experience.'
),
(
  'Union Jack',
  'Firestone Walker Brewing Co.',
  1,
  'This is a true interpretation of the West Coast IPA, with plenty of grapefruit and hop bitterness on the backend, but there’s a real sense of balance here as well. And after drinking some of the double IPAs you’ll find on this list, Union Jack might feel downright understated.'
),
(
  'Big Easy IPA',
  'Abita Brewing Co.',
  1,
  'Brewed with lemon peels and dry hopped with Cascade, Amarillo, Centennial and Simcoe for a hoppy aroma of citrus, fruit and pine. Its easy to drink and just right for long hot days, steamy nights, parades or a day on the river with friends.'
);

INSERT INTO x_ref_table (beer_id, style_type_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 2),
(6, 5),
(7, 5),
(8, 4),
(9, 5),
(10, 5);





