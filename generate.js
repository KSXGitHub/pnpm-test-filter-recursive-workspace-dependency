#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const names = ['a', 'b', 'c', 'd']

for (let i = 0; i != names.length; ++i) {
  const name = names[i]
  const manifest = {
    name,
    version: '0.0.0',
    private: true,
    dependencies: {},
  }
  const dep = names[i + 1]
  if (dep) {
    manifest.dependencies[dep] = 'workspace:*'
  } else {
    manifest.dependencies['is-negative'] = '*'
  }
  fs.writeFileSync(
    path.join(__dirname, 'packages', name, 'package.json'),
    JSON.stringify(manifest, undefined, 2) + '\n',
  )
}
