// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminHome = require('../../../app/controller/admin/home');
import ExportDefaultHome = require('../../../app/controller/default/home');

declare module 'egg' {
  interface IController {
    admin: {
      home: ExportAdminHome;
    }
    default: {
      home: ExportDefaultHome;
    }
  }
}
