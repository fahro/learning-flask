import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "#f4f4f4",
        "fontFamily": "'Open Sans', sans-serif"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h2": {
        "fontWeight": "300",
        "letterSpacing": -1.2
    },
    "a": {
        "textDecoration": "none",
        "display": "inline-block"
    },
    "container": {
        "width": 1000,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "pull-left": {
        "float": "left"
    },
    "pull-right": {
        "float": "right"
    },
    "clearfix": {
        "clear": "both"
    },
    "section-content": {
        "color": "#3a3a3a",
        "float": "left",
        "width": 340
    },
    "section-device": {
        "float": "right",
        "position": "relative",
        "top": 65
    },
    "section-device img": {
        "width": 600
    },
    "btn-primary": {
        "background": "#4285f4",
        "border": "1px solid #1266f1",
        "color": "#ffffff",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "fontWeight": "600",
        "letterSpacing": 0.23,
        "paddingTop": 12,
        "paddingRight": 32,
        "paddingBottom": 12,
        "paddingLeft": 32,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase"
    },
    "btn-secondary": {
        "background": "#ffffff",
        "border": "1px solid #e6e6e6",
        "color": "#3372df",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "fontWeight": "600",
        "letterSpacing": 0.23,
        "paddingTop": 12,
        "paddingRight": 32,
        "paddingBottom": 12,
        "paddingLeft": 32,
        "textAlign": "center",
        "textDecoration": "none",
        "textTransform": "uppercase"
    },
    "header": {
        "backgroundColor": "#fff",
        "paddingTop": 45,
        "paddingRight": 0,
        "paddingBottom": 45,
        "paddingLeft": 0
    },
    "title": {
        "float": "left",
        "fontFamily": "'Helvetica Neue', Arial, Helvetica, sans-serif",
        "fontSize": 27,
        "letterSpacing": 2.5,
        "textTransform": "uppercase"
    },
    "title a": {
        "color": "#3a3a3a"
    },
    "title a:visited": {
        "color": "#3a3a3a"
    },
    "main-nav": {
        "float": "right"
    },
    "main-nav ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "main-nav li": {
        "display": "inline-block",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 13,
        "fontWeight": "600",
        "textTransform": "uppercase"
    },
    "main-nav li a": {
        "color": "#3a3a3a"
    },
    "hero-section section-content": {
        "position": "relative",
        "top": 100
    },
    "hero-section section-content h2": {
        "fontSize": 40
    },
    "hero-section section-content btn-primary": {
        "marginRight": 10
    },
    "signup-section section-content h2": {
        "fontSize": 30
    },
    "signup-section section-content": {
        "position": "relative",
        "top": 53
    },
    "form-group": {
        "marginBottom": 20
    },
    "form-group label": {
        "color": "#3a3a3a",
        "display": "block",
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 15,
        "fontWeight": "600",
        "marginBottom": 5
    },
    "form-group input": {
        "border": "none",
        "borderBottom": "2px solid #4285f4",
        "backgroundColor": "transparent",
        "color": "#3a3a3a",
        "fontSize": 18,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "width": "100%"
    },
    "form-group input:focus": {
        "outline": 0
    },
    "form-group error-message": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "color": "#db4437"
    },
    "form-group error-message + input": {
        "borderBottom": "2px solid #db4437"
    },
    "error-message": {
        "color": "#db4437"
    },
    "about-section h2": {
        "fontSize": 30,
        "marginBottom": 0
    },
    "about-section p": {
        "fontSize": 16
    },
    "section-tabs": {
        "float": "left",
        "width": 340
    },
    "section-tabs places": {
        "marginTop": 62,
        "paddingRight": 20
    },
    "section-tabs places a": {
        "color": "#3372df"
    },
    "section-tabs places a:visited": {
        "color": "#3372df"
    },
    "section-tabs article": {
        "marginBottom": 20
    },
    "section-tabs article name": {
        "fontSize": 18
    },
    "section-tabs article walking-distance": {
        "color": "#6e6e6e",
        "fontSize": 13,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "section-map": {
        "float": "right",
        "width": 660
    },
    "section-map nav": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "section-map form-group": {
        "display": "inline"
    },
    "section-map address": {
        "fontSize": 14,
        "marginRight": 10,
        "width": "87%"
    },
    "section-map submit": {
        "fontSize": 10,
        "paddingTop": 5,
        "paddingRight": 15,
        "paddingBottom": 5,
        "paddingLeft": 15
    },
    "map": {
        "height": 500
    },
    "leaflet-popup-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "leaflet-popup-content p": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    }
});