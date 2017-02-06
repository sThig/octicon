import test from 'ava';
import uauthicons from '../';
import fs from 'fs';

const uauthiconsLib = fs.readdirSync("../lib/svg/");

test('uauthicons are loaded', t => {
  t.truthy(uauthicons, "Didn't find any uauthicons.");
  t.not(Object.keys(uauthicons).length, 0, "Didn't find any uauthicons.")
});

test('uauthicons have keywords', t => {
  t.truthy(uauthicons, "Didn't find any uauthicons.");
  Object.keys(uauthicons).forEach( point => {
    t.truthy(uauthicons[point].keywords, 'The uauthicon "' + point + '" doesn\'t have any keywords')
    t.not(uauthicons[point].keywords.length, 0, 'The uauthicon "' + point + '" doesn\'t have any keywords')
  })
});

test('Every uauthicon is in ./lib/data.json', t => {
  uauthiconsLib.forEach( point => {
    point = point.replace('.svg', '')
    t.truthy(uauthicons[point], './lib/data.json doesn\'t include the uauthicon "' + point + '"')
  })
})

test('No deprecated uauthicons are in ./lib/data.json', t => {
  Object.keys(uauthicons).forEach( point => {
    t.truthy(uauthiconsLib.indexOf(point+'.svg') >= 0, './lib/data.json contains the deleted uauthicon `' + point + '`, please remove it.' );
  })
})
