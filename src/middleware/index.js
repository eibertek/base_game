import { Router } from 'express';
import path from 'path';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import { version } from '../../package.json';

const sendMail =  require('gmail-send');
export default ({ config }) => {
	let routes = Router();

  routes.get('*', (req, res) => {
			return res.sendFile(path.join(__dirname + './../views/index.html'));
  });
	
	return routes;
}