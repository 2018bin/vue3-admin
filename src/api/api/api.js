// import {  post } from './httpd.js'
import {post} from '@/utils/request'
const baseUrl  ="http://localhost:90"
const proxyUrl="http://localhost:90/index.php/admin"
export const login = params => post(proxyUrl+'/user/login', params);
export const getUserInfo = params => post(proxyUrl+'/uc/info', params);



