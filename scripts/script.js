// Random price from 100000 to 1000000
const randomPrice = () =>
  (Math.floor(Math.random() * 1000000) + 100000).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
// Random date
const randomDate = (start, end) => {
  var d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const houses = [
  {
    address: "O'Hara Island",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "rent",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/f802605124b90428355f747961c99371-cc_ft_1536.webp",
    description:
      "Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 3",
      "Bathrooms: 4",
      "Full bathrooms: 3",
      "1/2 bathrooms: 1",
      "Total interior livable area: 2,871 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "housMillie Keye 2",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "sell",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/fb04ecea10351498b1390f5cb4b35c32-cc_ft_1536.webp",
    description:
      "We are pleased to present a unique opportunity for a bright and homely gabled apartment on the second floor with a balcony where you can enjoy the sun and lake view. Welcoming hall with hanging facilities and wardrobes. Bright kitchen in classic style with generous dining area, here there is plenty of storage in cupboards and a large corner pantry. Airy family room with high ceiling, beautiful parquet floor and fireplace.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 2",
      "Bathrooms: 2",
      "Full bathrooms: 2",
      "1/2 bathrooms: 1",
      "Total interior livable area: 1,801 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "Gibson Plains",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "buy",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/6409282398e147b3e92498787db62c19-cc_ft_1536.webp",
    description:
      "Proximity to grocery store, shops, gym, restaurant, pizzerias, pharmacy and exercise track. Only a 15-minute walk takes you into the center.Good bus connections to the city pulse and to the University. This is a perfect home for you who are a student or want a pleasant apartment close to everything.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 3",
      "Bathrooms: 2",
      "Full bathrooms: 1",
      "1/2 bathrooms: 1",
      "Total interior livable area: 1,271 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "Rippin Roads",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "buy",
    price: randomPrice(),
    unit: "$",
    image:
      "https://photos.zillowstatic.com/fp/ff86b42ad90641ff0de71f89910b08a9-cc_ft_1536.webp",
    description:
      "Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 2",
      "Bathrooms: 1",
      "Full bathrooms: 1",
      "1/2 bathrooms: 1",
      "Total interior livable area: 2,271 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "Gibson Plains",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "sell",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/fb04ecea10351498b1390f5cb4b35c32-cc_ft_1536.webp",
    description:
      "We are pleased to present a unique opportunity for a bright and homely gabled apartment on the second floor with a balcony where you can enjoy the sun and lake view. Welcoming hall with hanging facilities and wardrobes. Bright kitchen in classic style with generous dining area, here there is plenty of storage in cupboards and a large corner pantry. Airy family room with high ceiling, beautiful parquet floor and fireplace. Two bedrooms with lake views, one of which has access to a balcony. WC/Shower with tiles/clinkers, comfortable underfloor heating, equipped with washing machine/dryer.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 1",
      "Bathrooms: 1",
      "Full bathrooms: 1",
      "1/2 bathrooms: 0",
      "Total interior livable area: 871 sqft",
      "Private pool: No",
    ],
  },
  {
    address: "Mitchell Forges",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "rent",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/2c00d6694e54eaef30f57002dbea198f-cc_ft_1536.webp",
    description:
      "Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 3",
      "Bathrooms: 4",
      "Full bathrooms: 3",
      "1/2 bathrooms: 1",
      "Total interior livable area: 2,871 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "Serena Islands",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "sell",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/a8c13fa3cd3d2d1c0ae279a61935d7c8-cc_ft_1536.webp",
    description:
      "Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 5",
      "Bathrooms: 4",
      "Full bathrooms: 3",
      "1/2 bathrooms: 1",
      "Total interior livable area: 3,871 sqft",
      "Private pool: No",
    ],
  },
  {
    address: "O'Hara Island",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "rent",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/f802605124b90428355f747961c99371-cc_ft_1536.webp",
    description:
      "Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 4",
      "Bathrooms: 4",
      "Full bathrooms: 3",
      "1/2 bathrooms: 1",
      "Total interior livable area: 1,571 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "O'Hara Island",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "rent",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/f802605124b90428355f747961c99371-cc_ft_1536.webp",
    description:
      "The Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 2",
      "Bathrooms: 2",
      "Full bathrooms: 2",
      "1/2 bathrooms: 1",
      "Total interior livable area: 1,871 sqft",
      "Private pool: Yes",
    ],
  },
  {
    address: "O'Hara Island",
    date: randomDate(new Date(2019, 0, 1), new Date()),
    category: "rent",
    price: randomPrice(),
    image:
      "https://photos.zillowstatic.com/fp/f802605124b90428355f747961c99371-cc_ft_1536.webp",
    description:
      "The Here you are met by a well-planned and bright four-room apartment of 148 square meters. Large windows in the living room and generous ceiling height. Simply a pleasant accommodation.",
    images: [
      {
        url: "https://photos.zillowstatic.com/fp/4042a68f75f7d211efcc1b1d852a5034-cc_ft_768.webp",
        alt: "Living room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/30c9ca67ab95540c3938aa1509c3b416-cc_ft_768.webp",
        alt: "Dining room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/64c2f7a6827574406a3b70c692e55abb-cc_ft_768.webp",
        alt: "Bed room",
      },
      {
        url: "https://photos.zillowstatic.com/fp/8240e3d9b4ff42e13dad27bfa9c509e7-cc_ft_768.webp",
        alt: "Bath room",
      },
    ],
    information: [
      "Bedrooms: 3",
      "Bathrooms: 3",
      "Full bathrooms: 3",
      "1/2 bathrooms: 0",
      "Total interior livable area: 2,871 sqft",
      "Private pool: No",
    ],
  },
];

// Render listing function
function showListing(homes) {
  $.each(homes, function (index, house) {
    $(".products .container").append(`
        <div class="product-wrapper">
          <div class="product">
          <a href="event.html#${index}" class="address"><img src="${house.image}" alt="${house.address}"></a>
            <div class="flex-row">
              <a href="event.html#${index}" class="address">${house.address}</a>
              <div class="date">${house.date}</div>
            </div>
            <div class="desc">${house.description}</div>
            <div class="flex-row">
              <div class="category">${house.category}</div>
            </div>
            <a href="#" class="show-description">Description</a>
            <div class="flex-row">
            <div class="price">${house.price}</div>
            <a href="event.html#${index}" class="show-info">More information</a>
            </div>
          </div>
        </div>
    `);
  });
}
//Render all of information dynamically in different page
$(document).ready(function () {
  if (window.location.pathname.indexOf("index") > -1) {
    showListing(houses.slice(0, 6));
  } else if (window.location.pathname.indexOf("all-properties") > -1) {
    showListing(houses);
  } else if (window.location.pathname.indexOf("event") > -1) {
    const itemIndex = parseInt(window.location.hash.slice(1));
    $(".name-event").text(houses[itemIndex].address);
    $(".date-event").text(houses[itemIndex].date);
    $(".category-event").text(houses[itemIndex].category);
    $(".description-event").text(houses[itemIndex].description);
    houses[itemIndex].information.forEach((li, index) => {
      $(".information-event").append(`<li>${li}</li>`);
    });
    houses[itemIndex].images.forEach((img, index) => {
      $(".images-event").append(
        `<img class="image" src="${img.url}" alt="${img.alt}" />`
      );
    });
  }
  //Show description function
  $(".show-description").click(function (e) {
    e.preventDefault();
    const displayState = $(this).siblings(".desc").css("display");
    if (displayState === "none") {
      $(".show-description").text("Description");
      $(".desc").slideUp();
      $(this).siblings(".desc").slideDown();
      $(this).text("Less");
    } else {
      $(".desc").slideUp();
      $(this).text("Description");
    }
  });
  //Show more information function
  $(".fold").click(function (e) {
    e.preventDefault();
    const displayState = $(this).siblings(".information-event").css("display");
    if (displayState === "none") {
      $(".fold").children("span").text("See More");
      $(".information-event").slideDown();
      $(this).children("span").text("See Less");
      $(".material-symbols-outlined").text("expand_less");
    } else {
      $(".information-event").slideUp();
      $(this).children("span").text("See More");
      $(".material-symbols-outlined").text("expand_more");
    }
  });
  //
  $(".save-button").click(function (e) {
    if ($("#name")[0].checkValidity() && $("#email")[0].checkValidity()) {
      e.preventDefault();
      $("form").fadeOut(function () {
        $(".message").fadeIn();
      });
    }
  });
});
