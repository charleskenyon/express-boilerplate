import jQuery from "jquery-slim";
import Inferno from 'inferno';
import '../styles/main.scss';

const test = 'page';
const reTest = `${test} working`;

window.$ = window.jQuery = jQuery;

$('body').append($('<p>').text(reTest));