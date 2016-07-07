"use strict";

const env = require("require-env");

const SOURCE = {
  protocol: "blend:",
  query: {
    layers: [
      {
        source: "http://tile.stamen.com.s3-website-us-east-1.amazonaws.com/terrain-background/{z}/{x}/{y}.png",
      },
      {
        source: "http://hillshades.openterrain.org.s3-website-us-east-1.amazonaws.com/positron/{z}/{x}/{y}.png",
        "comp-op": "hard-light",
        opacity: "0.7"
      },
      {
        source: "http://tile.stamen.com.s3-website-us-east-1.amazonaws.com/terrain-features/{z}/{x}/{y}.png",
      },
      {
        source: "http://tile.stamen.com.s3-website-us-east-1.amazonaws.com/terrain-labels/{z}/{x}/{y}.png",
      }
    ],
    format: "png8"
  }
};

const makeHandler = require("./lib/");

exports.handle = makeHandler(
  SOURCE,
  env.require("S3_BUCKET"),
  env.require("KEY_PREFIX")
);
