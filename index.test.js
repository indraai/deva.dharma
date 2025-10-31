"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:72077946913533507276 LICENSE.md

const {expect} = require('chai')
const DharmaDeva = require('./index.js');

describe(DharmaDeva.me.name, () => {
  beforeEach(() => {
    return DharmaDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(DharmaDeva).to.be.an('object');
    expect(DharmaDeva).to.have.property('agent');
    expect(DharmaDeva).to.have.property('vars');
    expect(DharmaDeva).to.have.property('listeners');
    expect(DharmaDeva).to.have.property('methods');
    expect(DharmaDeva).to.have.property('modules');
  });
})
