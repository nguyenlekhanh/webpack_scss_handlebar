var jQuery = require("jquery")

import Carousel from 'bootstrap/js/dist/carousel';

import '../css/style.scss';

import './image_scroll.js'
import header_menu from './header_menu.js'

import '../../view/index.hbs';
import logo from '../imgs/logo.png'
import banner from '../imgs/banner.png'
import product from '../imgs/product1.jpg'



$(function() {
  // Handler for .ready() called.
	console.log('abc');
	header_menu.header_menu_init();
});