
var person = {
    id : 1000,
    name : 'Ahmad',
    favoriteBooks : [
   {id :22, name:'js',page:453},
   {id :2, name:'react.js',page:1253}
    ],
    address : {country :'Afghanistan',provice : 'Herat',district:'Guryan'},
    frinds:[
      {
        id : 1098,
        name:'karim',
        favoriteBooks: [
          {id :1, name:'CSS with jones',page:444},
          {id :2, name:'react.js',page:876}
        ],
        address : {country :'Afghanistan',provice : 'Herat',district:'kahrokh'}
      },
        {
          id : 1009,
          name:'mohamood',
          favoriteBooks: [
            {id :1, name:'node.js',page:444},
            {id :2, name:'express.js',page:876}
          ],
          address : {country :'Afghanistan',provice : 'Herat',district:'gozera'}, 
      },
    ],
  };
  
  q18
  for(let x in person.favoriteBooks){
    console.log(person.favoriteBooks[x]);
  }
  
  q19
  for(let x in person.frinds){
    console.log(person.frinds[0].favoriteBooks);
    console.log(person.frinds[1].favoriteBooks);
  }