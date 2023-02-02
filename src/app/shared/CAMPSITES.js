import reactLakeImg from "../assets/img/react-lake.jpg";
import chromeRiverImg from "../assets/img/chrome-river.jpg";
import breadCrumbImg from "../assets/img/breadcrumb-trail.jpg";
import reduxWoodsImg from "../assets/img/redux-woods.jpg";
import housecleaning from "../assets/img/house-cleaning.jpg";
import moveout from "../assets/img/move-out.jpg";
import carpetcleaning from "../assets/img/carpet-cleaning.jpg";
import tilecleaning from "../assets/img/tile-cleaning.jpg";

export const CAMPSITES = [
  {
    id: 0,
    name: "Carpet Cleaning",
    image: carpetcleaning,
    elevation: 1233,
    featured: false,
    description:
      "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.",
  },
  {
    id: 1,
    name: "Tile & Grout Cleaning",
    image: tilecleaning,
    elevation: 877,
    featured: false,
    description:
      "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.",
  },
  {
    id: 2,
    name: "House Cleaning",
    image: housecleaning,
    elevation: 2901,
    featured: false,
    description:
      "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.",
  },
  {
    id: 3,
    name: "Move-Out Cleaning",
    image: moveout,
    elevation: 42,
    featured: true,
    description:
      "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
  },
];
