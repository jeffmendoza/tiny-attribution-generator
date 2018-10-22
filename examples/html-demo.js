// Copyright (c) Microsoft Corporation and others.
// SPDX-License-Identifier: Apache-2.0

const DocBuilder = require('../lib/docbuilder').default;
const HtmlRenderer = require('../lib/outputs/html').default;
const JSONSource = require('../lib/inputs/json').default;

const renderer = new HtmlRenderer();
const builder = new DocBuilder(renderer);

const packageData = JSON.stringify({
  packages: [
    {
      name: 'aabb',
      version: '1.0.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/aabb',
      copyrights: ['Copyright (c) Test copyright'],
    },
    {
      name: 'bbcc',
      version: '1.1.1',
      license: 'ISC',
      website: 'https://github.com/testpackage/bbcc',
    },
    {
      name: 'ccdd',
      version: '1.3.4',
      license: 'MIT',
      website: 'https://github.com/testpackage/ccdd',
      copyrights: ['Copyright the holder', 'Copyright the other holder'],
    },
  ],
});

const source = new JSONSource(packageData);
builder.read(source).then(() => {
  const output = builder.build();
  console.log(output);
});
