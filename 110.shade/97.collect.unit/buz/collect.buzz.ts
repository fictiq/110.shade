import * as ActCol from '../../97.collect.unit/collect.action';

var bit, lst, dat, idx, val, src, dex;

export const initCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  return cpy;
};

export const updateCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  return cpy;
};

//return the first item in a collection
export const fetchCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  if (bal.val == null) bal.val = 1;

  if (bal.bit == null)
    bal.slv({ clcBit: { idx: 'fetch-collect-err', src: 'no-bit' } });
  var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
  var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]];

  if (bal.val == 1) bit = cabBit.bitList[0];
  else bit = cabBit;

  if (bal.slv != null) bal.slv({ clcBit: { idx: 'fetch-collect', dat: bit } });
  return cpy;
};

export const readCollect = async (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  if (bal.bit == null)
    bal.slv({ clcBit: { idx: 'read-collect-err', src: 'no-bit' } });

  var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
  if (cpy.caboodleBits[type] == null) createCollect(cpy, { idx: type }, ste);

  var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]];

  if (cabBit.bits[bal.idx] == null) {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, {
      idx: bal.idx,
      src: bal.src,
      bit: bal.bit,
    });
  } else {
    dat = cabBit.bitList[cabBit.bits[bal.idx]];
  }

  if (bal.slv != null) bal.slv({ clcBit: { idx: 'read-collect', dat } });
  return cpy;
};

export const writeCollect = async (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  dat = null;

  //let us check see if it exists
  var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();

  if (cpy.caboodleBits[type] == null) createCollect(cpy, { idx: type }, ste);

  if (bal.bit == null)
    bal.slv({ rskBit: { idx: 'write-collect-err', src: 'no-bit' } });

  var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]];

  bal.idx;

  val = 0;

  if (cabBit.bits[bal.idx] == null) {
    bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
    var objDat = bit[Object.keys(bit)[0]];
    dat = objDat.dat;

    if (dat == null) dat = {};

    dat.dex = cabBit.bitList.length;
    cabBit.bitList.push(dat);

    var idx = bal.idx;
    if (idx == null) idx = dat.idx;

    if (idx == null) throw new Error('write collect has no idx');

    cabBit.bits[idx] = dat.dex;
  } else {
    var cabDat = cabBit.bitList[cabBit.bits[bal.idx]];

    bal.dat;

    val = 1;

    for (var key in bal.dat) {
      if (cabDat == null) cabDat = {};
      cabDat[key] = bal.dat[key];
    }

    cabBit.bitList[cabBit.bits[bal.idx]] = cabDat;
    dat = cabDat;
    //!!! SUPER IMPORTANT
  }

  if (dat == null && bal.slv != null)
    bal.slv({ rskBit: { idx: 'write-collect-err', src: 'no-dat' } });

  if (bal.slv != null) bal.slv({ clcBit: { idx: 'write-collect', val, dat } });

  return cpy;
};

export const createCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  var cabBit: CaboodleBit = { idx: bal.idx, dex: 0, bits: {}, bitList: [] };
  cabBit.dex = cpy.caboodleBitList.length;

  cpy.caboodleBitList.push(cabBit);
  cpy.caboodleBits[cabBit.idx] = cabBit.dex;

  if (bal.slv != null)
    bal.slv({ clcBit: { idx: 'create-collect', dat: cabBit } });

  return cpy;
};

export const removeCollect = async (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();

  if (cpy.caboodleBits[type] == null)
    return bal.slv({ rskBit: { idx: 'remove-collect-not-present' } });

  var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]];

  if (cabBit.bits[bal.idx] == null)
    return bal.slv({ rskBit: { idx: 'remove-collect-idx-not-present' } });

  bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
  var objDat = bit[Object.keys(bit)[0]];
  dat = objDat.dat;

  dex = dat.dex;

  for (var i = dex; i < cabBit.bitList.length - 1; i++) {
    var update = cabBit.bitList[i];
    update.dex -= 1;
  }

  for (var key in dat) {
    dat[key] = null;
  }

  delete cabBit.bits[bal.idx];
  var itm = cabBit.bitList.splice(dex, 1);

  cabBit.dex -= 1;

  if (bal.slv != null)
    bal.slv({ clcBit: { idx: 'remove-collect', dat: itm[0] } });

  return cpy;
};

export const putCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  cpy.caboodleBits[bal.idx] = bal.val;
  cpy.caboodleBitList[bal.val] = bal.dat;

  if (bal.slv != null)
    bal.slv({ clcBit: { idx: 'put-collect', dat: bal.dat } });
  return cpy;
};

export const getCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  val = cpy.caboodleBits[bal.idx];
  dat = cpy.caboodleBitList[val];

  if (bal.slv != null) bal.slv({ clcBit: { idx: 'get-collect', val, dat } });
  return cpy;
};

export const modelCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  //debugger

  if (bal.slv != null) bal.slv({ clcBit: { idx: 'model-collect', dat: cpy } });
  return cpy;
};

export const deleteCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  //debugger
  return cpy;
};

export const emptyCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  //debugger
  return cpy;
};

export const dotCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  var gel = bal.dat;
  var out = [];

  bal.src.split('\n').forEach((a, b) => {
    if (a.includes('//') == true) return;
    var doTCompiled = doT.template(a);
    var outLine = doTCompiled(gel);
    out.push(outLine);
  });

  if (bal.slv != null)
    bal.slv({ clcBit: { idx: 'dot-vurt', lst: out, src: out.join('\n') } });

  return cpy;
};

export const formatCollect = (
  cpy: CollectModel,
  bal: CollectBit,
  ste: State,
) => {
  lst = bal.src.split(':');

  var idx = lst[0];

  var out = [];

  idx = S(idx).collapseWhitespace().s;
  var opt = lst[1].split(',');
  opt.forEach((a, b) => {
    var now = S(a).collapseWhitespace().s;
    if (a.length < 1) return;
    out.push(now);
  });

  dat = [idx, out];

  bal.slv({ clcBit: { idx: 'format-collect', dat } });
  return cpy;
};

export const listCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  var type = bal.bit.split(' ').slice(-1).pop().toLowerCase();
  if (cpy.caboodleBits[type] == null) createCollect(cpy, { idx: type }, ste);

  var cabBit: CaboodleBit = cpy.caboodleBitList[cpy.caboodleBits[type]];

  lst = [];

  cabBit.bitList.forEach((a) => {
    if (a.idx != null) lst.push(a.idx);
    if (a.id != null) lst.push(a.id);
  });

  bal.slv({ clcBit: { idx: 'list-collect', lst } });

  return cpy;
};

export const hashCollect = (cpy: CollectModel, bal: CollectBit, ste: State) => {
  if (bal.src == null) bal.src = '';
  lst = bal.src.split('\n');

  dat = {};

  lst.forEach((a) => {
    a = S(a).collapseWhitespace().s;
    if (a.length < 3) return;

    var hold = a.split(':');

    var dom = hold[0];
    var sub = hold[1];

    var now = sub.split(',');

    now.forEach((b, c) => {
      now[c] = S(b).collapseWhitespace().s;
    });

    dat[dom] = now;
  });

  bal.slv({ clcBit: { idx: 'hash-collect', dat } });

  return cpy;
};

import { CollectModel } from '../collect.model';
import CollectBit from '../fce/collect.bit';
import State from '../../99.core/state';
import CaboodleBit from '../fce/caboodle.bit';
import * as S from 'string';

import * as doT from 'dot';
