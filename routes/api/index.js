const apiRoute = require("express").Router();
const authRoute = require("./auth.route");
const hotelRoute = require("./hotel.route");
const meRoute = require("./me.route");
const roomRoute = require("./room.route");
const ratingRoute = require("./rating.route");
const bookingRoute = require("./booking.route");
const bookmarkRoute = require("./bookmark.route");
const hotelFeatureRoute = require("./hotelFeature.route");
const adminRoute = require("./admin");
apiRoute.use("/auth", authRoute);
apiRoute.use("/hotel", hotelRoute);
apiRoute.use("/me", meRoute);
apiRoute.use("/room", roomRoute);
apiRoute.use("/rating", ratingRoute);
apiRoute.use("/booking", bookingRoute);
apiRoute.use("/admin", adminRoute);
apiRoute.use("/bookmark", bookmarkRoute);
apiRoute.use("/hotelFeature", hotelFeatureRoute);
module.exports = apiRoute;
